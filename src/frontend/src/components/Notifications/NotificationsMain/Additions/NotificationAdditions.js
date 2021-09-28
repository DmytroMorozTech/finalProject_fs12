import React from 'react'
import styles from './styles'
import DeleteIcon from '@material-ui/icons/Delete'
import CancelIcon from '@material-ui/icons/Cancel'
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff'
import {NavLink} from 'react-router-dom'
import {MenuItem} from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

function NotificationAdditions (props) {
  const {userName} = props
  const userFirstName = userName.split(' ')[0] + '\'s'
  const classes = styles()
  return (
    <div>
      <MenuItem component={NavLink} to='#' className={classes.itemWrapper}>
        <CheckCircleIcon size='large' className={classes.icon}/>
        <div className={classes.itemTextWrapper}>
          <p className={classes.itemTextHeader}>Mark as viewed</p>
          <p className={classes.itemTextBody}>Notification will be marked as viewed</p>
        </div>
      </MenuItem>
      <MenuItem component={NavLink} to='#' className={classes.itemWrapper}>
        <DeleteIcon size='large' className={classes.icon}/>
        <div className={classes.itemTextWrapper}>
          <p className={classes.itemTextHeader}>Delete</p>
          <p className={classes.itemTextBody}>Delete this notification</p>
        </div>
      </MenuItem>
      <MenuItem component={NavLink} to='#' className={classes.itemWrapper}>
        <CancelIcon size='large' className={classes.icon}/>
        <div className={classes.itemTextWrapper}>
          <p className={classes.itemTextHeader}>Mute {userName}</p>
          <p className={classes.itemTextBody}>Stop seeing {userFirstName} updates</p>
        </div>
      </MenuItem>
      <MenuItem component={NavLink} to='#' className={classes.itemWrapper}>
        <NotificationsOffIcon size='large' className={classes.icon}/>
        <div className={classes.itemTextWrapper}>
          <p className={classes.itemTextHeader}>Turn off</p>
          <p className={classes.itemTextBody}>Stop receiving notifications like this</p>
        </div>
      </MenuItem>
    </div>
  )
}

export default NotificationAdditions
