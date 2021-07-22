import React from 'react'
import StyleNotifications from '../../Notifications/StyleNotifications'

function Messages () {
  const classes = StyleNotifications()
  return (
    <h1 className={classes.text}>
      Welcome to the Messages page!
    </h1>
  )
}

export default Messages