import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import React from 'react'
import styles from './styles'
import { useDispatch } from 'react-redux'
import { markAllNotificationsAsViewedAction } from '../../../redux/Notification/notificationActions'

function SmallNotification () {
  const classes = styles()

  const dispatch = useDispatch()

  return (
    <div className={classes.smallNotification}>
      <div className={classes.item}>
        <NotificationsNoneOutlinedIcon fontSize="inherit" className={classes.icon}/>
        <span className={classes.title}>Your notifications live here</span>
      </div>
      <div
        id='markAllNotificationsAsViewed'
        onClick={() => dispatch(markAllNotificationsAsViewedAction())}
        className={classes.link}>
        Mark all as viewed
      </div>
    </div>
  )
}

export default SmallNotification
