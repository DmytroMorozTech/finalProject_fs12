import React from 'react'
import Style from './styles'

function Network () {
  const classes = Style()
  return (
    <>
      <h1 className={classes.text}>
        Welcome to the Network page!
      </h1>
    </>
  )
}

export default Network
