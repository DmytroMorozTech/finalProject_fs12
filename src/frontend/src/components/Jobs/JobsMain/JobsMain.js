import styles from './styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Vacancy from './Vacancy/Vacancy'

function JobsMain () {
  const classes = styles()

  return (
    <div className={classes.root}>
      <Typography variant="h5">
        Recommended for you
      </Typography>
      <Typography variant="h6">
        Based on your profile and search history
      </Typography>
      <Vacancy/>
    </div>
  )
}

export default JobsMain
