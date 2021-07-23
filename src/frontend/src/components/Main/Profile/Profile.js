import React from 'react'
import Style from './styles'

function Profile () {
  const classes = Style()
  return (
    <h1 className={classes.text}>
      Welcome to the Profile page!
    </h1>
  )
}

export default Profile