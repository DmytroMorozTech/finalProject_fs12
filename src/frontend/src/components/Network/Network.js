import React from 'react'
import Style from './styles'
import { CircularProgress } from '@material-ui/core'

function Network () {
  const classes = Style()
  return (
    <>
      <h1 className={classes.text}>
        Welcome to the Network page!
      </h1>
      <CircularProgress color="secondary" />
    </>
  )
}

export default Network
