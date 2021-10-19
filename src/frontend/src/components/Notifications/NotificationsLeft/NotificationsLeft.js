import styles from './styles'
import Typography from '@material-ui/core/Typography'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import { markAllNotificationsAsViewedAction } from '../../../redux/Notification/notificationActions'
import { useDispatch, useSelector } from 'react-redux'
import { numberOfNotificationsSelector } from '../../../redux/Notification/notificationSelector'
import React from 'react'

function NotificationsLeft () {
  const classes = styles()
  const dispatch = useDispatch()
  const numberOfNotifications = useSelector(numberOfNotificationsSelector)

  return (
    <div className={classes.notificationsLeft}>
      <div className={classes.notifications}>
        <Typography variant="h5" align="center" className={classes.title}>
          Notifications
        </Typography>
        <Typography variant="h5" align="center" className={classes.description}>
          You’re all caught up! Check back later for new notifications
        </Typography>
      </div>
      <hr className={classes.line}/>
      <div className={classes.read}>
        <SharedButton
          disabled={numberOfNotifications === 0}
          onClick={() => dispatch(markAllNotificationsAsViewedAction())}
          title='Mark all as viewed'
        />
      </div>
    </div>
  )
}

export default NotificationsLeft
