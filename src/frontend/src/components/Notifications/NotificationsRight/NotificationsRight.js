import styles from './styles'
import ImgToJobsPage from '../../../shared/ImgToJobsPage/ImgToJobsPage'

function NotificationsRight () {
  const classes = styles()

  return (
    <div className={classes.notificationsRight}>
      <ImgToJobsPage/>
    </div>
  )
}

export default NotificationsRight