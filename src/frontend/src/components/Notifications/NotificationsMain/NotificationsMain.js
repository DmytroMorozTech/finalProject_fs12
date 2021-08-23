import React from 'react'
import styles from './styles'
import Notification from './Notification/Notification'

function NotificationsMain () {
  const classes = styles()
  return (
    <div className={classes.notifications}>
      <Notification/>
    </div>
  )
}

export default NotificationsMain
