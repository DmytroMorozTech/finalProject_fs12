import React from 'react'
import StyleJobs from './StyleJobs'

function Jobs () {
  const classes = StyleJobs()
  return (
    <h1 className={classes.text}>
      Welcome to the Jobs page!
    </h1>
  )
}

export default Jobs