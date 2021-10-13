import styles from './styles'
import Typography from '@material-ui/core/Typography'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import { markAllNotificationsAsViewedAction } from '../../../redux/Notification/notificationActions'
import { useDispatch } from 'react-redux'

function NotificationsLeft () {
  const classes = styles()
  const dispatch = useDispatch()

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
          onClick={() => dispatch(markAllNotificationsAsViewedAction())}
          title='Mark all as viewed'
        />
      </div>
    </div>
  )
}

export default NotificationsLeft
