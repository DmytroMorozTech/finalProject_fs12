import React from 'react'
import StyleNotifications from '../Notifications/StyleNotifications'

function Network () {
  const classes = StyleNotifications()
  return (
    <h1 className={classes.text}>
        Welcome to the Network page!
    </h1>
  )
}

export default Network