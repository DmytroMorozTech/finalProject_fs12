import styles from './styles'
import { Container, Hidden } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import React, { useEffect } from 'react'
import ConnectionsMain from './ConnectionsMain/ConnectionsMain'
import ConnectionsRight from './ConnectionsRight/ConnectionsRight'
import { useDispatch, useSelector } from 'react-redux'
import { connectionsSelector } from '../../../redux/Network/networkSelector'
import { getMyConnectionsAction } from '../../../redux/Network/networkActions'

function Connections () {
  const connections = useSelector(connectionsSelector)
  const classes = styles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyConnectionsAction())
  }, [dispatch])

  return (
    <Container className={classes.connections} maxWidth={'lg'}>
      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">

        <Grid item xs={12} sm={10} md={6} lg={7} xl={8}>
          <ConnectionsMain connections={connections}/>
        </Grid>

        <Hidden smDown>
          <Grid item md={4} lg={4} xl={1}>
            <ConnectionsRight/>
          </Grid>
        </Hidden>

      </Grid>
    </Container>
  )
}

export default Connections
