import React from 'react'
import StyleNotifications from '../../Notifications/StyleNotifications'

function Feed () {
  const classes = StyleNotifications()
  return (
    <h1 className={classes.text}>
      Welcome to the Home page!
    </h1>
  )
}

export default Feed