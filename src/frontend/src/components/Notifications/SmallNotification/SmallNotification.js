import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'

function SmallNotification () {
  const classes = styles()

  return (
    <div className={classes.smallNotification}>
      <div className={classes.item}>
        <NotificationsNoneOutlinedIcon fontSize="inherit" className={classes.icon}/>
        <span className={classes.title}>Improve your notifications</span>
      </div>
      {/* Link is hardcoded below */}
      <Link to='/notifications' className={classes.link}>
        View settings
      </Link>
    </div>
  )
}

export default SmallNotification
