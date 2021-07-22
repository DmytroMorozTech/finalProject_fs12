import React from 'react'
import StyleNotifications from './StyleNotifications'

function Notifications () {
  const classes = StyleNotifications()
  return (
    <h1 className={classes.text}>
        Welcome to the Notifications page!
    </h1>
  )
}

export default Notifications