import React from 'react'
import styles from './styles'
import Grid from '@material-ui/core/Grid'
import { Container, Hidden } from '@material-ui/core'
import NotificationsMain from './NotificationsMain/NotificationsMain'
import NotificationsRight from './NotificationsRight/NotificationsRight'
import NotificationsLeft from './NotificationsLeft/NotificationsLeft'
import SmallNotification from './SmallNotification/SmallNotification'

function Notifications () {
  const classes = styles()
  return (
    <Container className={classes.notifications} maxWidth={'lg'}>
      <Grid container spacing={2} alignItems="flex-start" justifyContent="center">

        <Hidden smDown>
          <NotificationsLeft/>
        </Hidden>

        <Grid item xs={12} sm={10} md={5} lg={5} xl={5}>
          <Hidden mdUp>
            <SmallNotification/>
          </Hidden>
          <NotificationsMain/>
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
