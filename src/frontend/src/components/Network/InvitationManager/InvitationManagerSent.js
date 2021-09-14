import styles from './styles'
import { Container, Grid } from '@material-ui/core'
import InvitationManagerHeader from './InvitationManagerHeader/InvitationManagerHeader'
import InvitationManagerSentMain from './InvitationManagerMain/InvitationManagerSentMain'
import InvitationManagerRight from './InvitationManagerRight/InvitationManagerRight'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllInvitations } from '../../../redux/Network/networkActions'
import { invitationsForMeSelector, invitationsFromMeSelector } from '../../../redux/Network/networkSelector'

function InvitationManagerSent () {
  const dispatch = useDispatch()

  // TODO: find out how to deal with empty dependencies array; with this code it works nice, but warning has appeared
  useEffect(() => {
    dispatch(getAllInvitations())
  }, [dispatch])

  const invitationsForMe = useSelector(invitationsForMeSelector)
  const invitationsFromMe = useSelector(invitationsFromMeSelector)

  const classes = styles()

  return (
    <Container maxWidth={'lg'} className={classes.invitationManager}>

      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
        <Grid item xs={7}>
          <div className={classes.main}>
            <InvitationManagerHeader
              numberOfInvReceived={invitationsForMe.length}
              numberOfInvSent={invitationsFromMe.length}
            />
            <InvitationManagerSentMain
              data={invitationsFromMe}
              numberOfInvSent={invitationsFromMe.length}/>
          </div>
        </Grid>

        <Grid item xs={3}>
          <InvitationManagerRight/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default InvitationManagerSent
