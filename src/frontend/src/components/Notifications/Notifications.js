import React from 'react'
import styles from './styles'
import Grid from '@material-ui/core/Grid'
import { Container, Hidden } from '@material-ui/core'
import NotificationsRight from './NotificationsRight/NotificationsRight'
import NotificationsLeft from './NotificationsLeft/NotificationsLeft'
import SmallNotification from './SmallNotification/SmallNotification'
import Feed from '../Main/Feed/Feed'

function Notifications () {
  const classes = styles()
  return (
    <Container className={classes.notifications} maxWidth={'lg'}>
      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">

        <Hidden smDown>
          <Grid item>
            <NotificationsLeft/>
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={8} md={6} lg={5} xl={5}>
          <Hidden mdUp>
            <SmallNotification/>
          </Hidden>
          <Feed type={'notifications'}/>
        </Grid>

        <Hidden mdDown>
          <Grid item md={4} lg={3} xl={3}>
            <NotificationsRight/>
          </Grid>
        </Hidden>

      </Grid>
    </Container>
  )
}

export default Notifications
