import styles from './styles'
import Typography from '@material-ui/core/Typography'
import SharedButton from '../../../shared/SharedButton/SharedButton'

function NotificationsLeft () {
  const classes = styles()

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
        <SharedButton title='Mark all as viewed'/>
      </div>
    </div>
  )
}

export default NotificationsLeft
