import styles from './styles'
import { Container, Grid } from '@material-ui/core'
import InvitationManagerHeader from './InvitationManagerHeader/InvitationManagerHeader'
import InvitationManagerReceivedMain from './InvitationManagerMain/InvitationManagerReceivedMain'
import InvitationManagerRight from './InvitationManagerRight/InvitationManagerRight'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInvitationsForMeAction, getInvitationsFromMeAction } from '../../../redux/Network/networkActions'
import { invitationsForMeSelector, invitationsFromMeSelector } from '../../../redux/Network/networkSelector'

function InvitationManagerReceived () {
  const dispatch = useDispatch()
  const invitationsForMe = useSelector(invitationsForMeSelector)
  const invitationsFromMe = useSelector(invitationsFromMeSelector)

  // TODO: find out how to deal with empty dependencies array; with this code it works nice, but warning has appeared
  useEffect(() => {
    dispatch(getInvitationsForMeAction())
    dispatch(getInvitationsFromMeAction())
  }, [dispatch])

  const classes = styles()

  return (
    <Container maxWidth={'lg'} className={classes.invitationManager}>

      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
        <Grid item xs={7}>
          <div className={classes.main}>
            <InvitationManagerHeader
              numberOfInvReceived={invitationsForMe.length}
              numberOfInvSent={invitationsFromMe.length
              }/>
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
    </Container>
  )
}

export default InvitationManagerReceived
