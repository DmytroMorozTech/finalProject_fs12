import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import React from 'react'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { markAllNotificationsAsViewedAction } from '../../../redux/Notification/notificationActions'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import { notificationsSelector } from '../../../redux/Notification/notificationSelector'
import clsx from 'clsx'

function SmallNotification () {
  const classes = styles()

  const dispatch = useDispatch()
  const notifications = useSelector(notificationsSelector)
  const allNotificationsAreViewed = notifications.filter(notification => !notification.isViewed).length === 0

  return (
    <div className={classes.smallNotification}>
      <div className={clsx(classes.item, classes.block)}>
        <NotificationsNoneOutlinedIcon fontSize="inherit" className={classes.icon}/>
        <span className={classes.title}>Your notifications live here</span>
      </div>
      <SharedButton
        id='markAllNotificationsAsViewed'
        className={classes.block}
        disabled={ notifications.length === 0 || allNotificationsAreViewed }
        onClick={() => dispatch(markAllNotificationsAsViewedAction())}
        title='Mark all as viewed'
      />
    </div>
  )
}

export default SmallNotification
