import React from 'react'
import Style from './styles'

function Messages () {
  const classes = Style()
  return (
    <h1 className={classes.text}>
      Welcome to the Messages page!
    </h1>
  )
}

export default Messages
