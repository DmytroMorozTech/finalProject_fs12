import styles from './styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Vacancy from './Vacancy/Vacancy'
import { Button } from '@material-ui/core'


function JobsMain () {
  const classes = styles()

  return (
    <div className={classes.container}>
      <Typography variant="h5">
        Recommended for you
      </Typography>
      <Typography variant="h6">
        Based on your profile and search history
      </Typography>
      <Vacancy/>
      <div className={classes.seeMore}>
        <Button color='primary' className={classes.button}>See more jobs</Button>
      </div>
    </div>
  )
}

export default JobsMain
