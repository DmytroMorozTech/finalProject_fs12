import React from 'react'
import Style from './styles'

function Jobs () {
  const classes = Style()
  return (
    <h1 className={classes.text}>
      Welcome to the Jobs page!
    </h1>
  )
}

export default Jobs
