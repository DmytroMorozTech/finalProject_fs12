import styles from './styles'
import { Container, Grid } from '@material-ui/core'
import InvitationManagerHeader from './InvitationManagerHeader/InvitationManagerHeader'
import InvitationManagerReceivedMain from './InvitationManagerMain/InvitationManagerReceivedMain'
import InvitationManagerRight from './InvitationManagerRight/InvitationManagerRight'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllInvitations } from '../../../redux/Network/networkActions'
import {
  invitationsAreLoading,
  invitationsForMeSelector,
  invitationsFromMeSelector
} from '../../../redux/Network/networkSelector'
import Preloader from '../../../shared/Preloader/Preloader'

function InvitationManagerReceived () {
  const dispatch = useDispatch()

  // TODO: find out how to deal with empty dependencies array; with this code it works nice, but warning has appeared
  useEffect(() => {
    dispatch(getAllInvitations())
    console.log('useEffect worked InvitationManagerReceived')
  }, [dispatch])

  const invitationsForMe = useSelector(invitationsForMeSelector)
  const invitationsFromMe = useSelector(invitationsFromMeSelector)

  const classes = styles()

  const isLoading = useSelector(invitationsAreLoading)

  return (
    isLoading ? Preloader
      : (<Container maxWidth={'lg'} className={classes.invitationManager}>

        <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
          <Grid item xs={7}>
            <div className={classes.main}>
              <InvitationManagerHeader
                numberOfInvReceived={invitationsForMe.length}
                numberOfInvSent={invitationsFromMe.length}
              />
              <InvitationManagerReceivedMain
                data={invitationsForMe}
                numbOfInvReceived={invitationsForMe.length}
              />
            </div>
          </Grid>

          <Grid item xs={3}>
            <InvitationManagerRight/>
          </Grid>
        </Grid>
      </Container>)
  )
}

export default InvitationManagerReceived
