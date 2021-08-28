import styles from './styles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

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
      <div className={classes.settings}>
        <Typography variant="body1" color="textSecondary" align="center">
          Improve your notifications
        </Typography>
        {/* Link is hardcoded below */}
        <Link to='/notifications' className={classes.link}>
          View settings
        </Link>
      </div>
    </div>
  )
}

export default NotificationsLeft
