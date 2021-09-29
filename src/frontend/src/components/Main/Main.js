import React, { useEffect } from 'react'
import Feed from './Feed/Feed'
import Grid from '@material-ui/core/Grid'
import MainLeft from './MainLeft/MainLeft'
import styleMain from './styles'
import { Container, Hidden } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {activeUserSelector, isLoadingUserSelector} from '../../redux/User/userSelector'
import Preloader from '../../shared/Preloader/Preloader'
import MainRight from './MainRight/MainRight'
import { connectionsSelector } from '../../redux/Network/networkSelector'
import { getMyConnectionsAction } from '../../redux/Network/networkActions'

function Main () {
  const classes = styleMain()
  const isLoadingUser = useSelector(isLoadingUserSelector)
  const activeUser = useSelector(activeUserSelector)
  const connections = useSelector(connectionsSelector)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyConnectionsAction())
  }, [dispatch])

  return isLoadingUser || !activeUser.id ? <Preloader/> : (
    <Container className={classes.container} maxWidth={'lg'} >
      <Grid container spacing={4} justifyContent={'center'} >

        <Hidden smDown>
          <Grid item sm={3} md={3} lg={2}>
            <MainLeft numberOfConnections={connections.length}/>
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Feed type={'posts'}/>
        </Grid>

        <Hidden mdDown>
          <Grid item lg={3}>
            <MainRight/>
          </Grid>
        </Hidden>

      </Grid>
    </Container>
  )
}

export default Main
