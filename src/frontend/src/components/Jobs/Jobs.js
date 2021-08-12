import React from 'react'
import styles from './styles'

function Jobs () {
  const classes = styles()
  return (
    <h1 className={classes.text}>
      Welcome to the Jobs page!
    </h1>
  )
}

export default Jobs
