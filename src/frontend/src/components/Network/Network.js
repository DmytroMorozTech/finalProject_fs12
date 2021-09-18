import React, { useEffect } from 'react'
import styles from './styles'
import NetworkMain from './NetworkMain/NetworkMain'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import NetworkLeft from './NetworkLeft/NetworkLeft'
import {getInvitationsForMeAction, getInvitationsFromMeAction, getMyConnectionsAction}
  from '../../redux/Network/networkActions'
import { useDispatch, useSelector } from 'react-redux'
import { connectionsSelector, invitationsForMeSelector } from '../../redux/Network/networkSelector'

function Network () {
  const dispatch = useDispatch()
  const classes = styles()
  const invitationsForMe = useSelector(invitationsForMeSelector)
  const connections = useSelector(connectionsSelector)

  // TODO: find out how to deal with empty dependencies array; with this code it works nice, but warning has appeared
  useEffect(() => {
    dispatch(getInvitationsForMeAction())
    dispatch(getInvitationsFromMeAction())
    dispatch(getMyConnectionsAction())
  }, [dispatch])

  useEffect(() => {
    dispatch(getMyConnectionsAction())
  }, [dispatch, invitationsForMe])

  return (
    <Container className={classes.network} maxWidth={'lg'}>
      <Grid container spacing={4} justifyContent="center">

        <Grid item className={classes.networkLeft}>
          <NetworkLeft numberOfConnections={connections.length}/>
        </Grid>

        <Grid item className={classes.networkMain}>
          <NetworkMain invitations={invitationsForMe}/>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Network
