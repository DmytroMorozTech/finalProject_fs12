import React from 'react'
import Style from './styles'
import DeleteIcon from '@material-ui/icons/Delete'
import CancelIcon from '@material-ui/icons/Cancel'
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff'
import {NavLink} from 'react-router-dom'
import {MenuItem} from '@material-ui/core'

function NotificationAdditions (props) {
  const {userName} = props
  const userFirstName = userName.split(' ')[0] + '\'s'
  const classes = Style()
  return (
    <div>
      <MenuItem component={NavLink} to='#' className={classes.itemWrapper}>
        <DeleteIcon className={classes.icon}/>
        <div className={classes.itemTextWrapper}>
          <p className={classes.itemTextHeader}>Delete</p>
          <p className={classes.itemTextBody}>Delete this notification</p>
        </div>
      </MenuItem>
      <MenuItem component={NavLink} to='#' className={classes.itemWrapper}>
        <CancelIcon className={classes.icon}/>
        <div className={classes.itemTextWrapper}>
          <p className={classes.itemTextHeader}>Mute {userName}</p>
          <p className={classes.itemTextBody}>Stop seeing {userFirstName} updates</p>
        </div>
      </MenuItem>
      <MenuItem component={NavLink} to='#' className={classes.itemWrapper}>
        <NotificationsOffIcon className={classes.icon}/>
        <div className={classes.itemTextWrapper}>
          <p className={classes.itemTextHeader}>Turn off</p>
          <p className={classes.itemTextBody}>Stop receiving notifications like this</p>
        </div>
      </MenuItem>
    </div>
  )
}

export default NotificationAdditions
