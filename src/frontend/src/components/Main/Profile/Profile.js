import React from 'react'
import StyleNotifications from '../../Notifications/StyleNotifications'

function Profile () {
  const classes = StyleNotifications()
  return (
    <h1 className={classes.text}>
      Welcome to the Profile page!
    </h1>
  )
}

export default Profile