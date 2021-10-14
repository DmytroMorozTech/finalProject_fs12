import React from 'react'
import styles from './styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { NavLink } from 'react-router-dom'
import { MenuItem } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import {
  deleteNotificationAction,
  markNotificationAsViewedAction
} from '../../../../redux/Notification/notificationActions'
import { useDispatch } from 'react-redux'

function NotificationAdditions (props) {
  const dispatch = useDispatch()
  const {notificationId, isViewed} = props
  const onMarkAsViewedHandler = () => dispatch(markNotificationAsViewedAction(notificationId))
  const onDeleteHandler = () => dispatch(deleteNotificationAction(notificationId))

  const classes = styles()
  return (
    <div>
      <MenuItem
        onClick={onMarkAsViewedHandler}
        component={NavLink} to='#'
        className={classes.itemWrapper}
        disabled={isViewed}
      >
        <CheckCircleIcon size='large' className={classes.icon}/>
        <div className={classes.itemTextWrapper}>
          <p className={classes.itemTextHeader}>Mark as viewed</p>
          <p className={classes.itemTextBody}>Notification will be marked as viewed</p>
        </div>
      </MenuItem>

      <MenuItem
        onClick={onDeleteHandler}
        component={NavLink} to='#'
        className={classes.itemWrapper}
      >
        <DeleteIcon size='large' className={classes.icon}/>
        <div className={classes.itemTextWrapper}>
          <p className={classes.itemTextHeader}>Delete</p>
          <p className={classes.itemTextBody}>Delete this notification</p>
        </div>
      </MenuItem>
    </div>
  )
}

export default NotificationAdditions
