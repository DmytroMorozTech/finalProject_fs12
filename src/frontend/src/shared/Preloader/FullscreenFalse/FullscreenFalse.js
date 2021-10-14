import { CircularProgress } from '@material-ui/core'
import styles from './styles'
import React from 'react'

function FullscreenFalse () {
  const classes = styles()

  return (
    <div className={classes.fullscreenFalse}>
      <CircularProgress/>
    </div>
  )
}

export default FullscreenFalse
