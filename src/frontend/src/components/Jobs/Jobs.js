import React from 'react'
import styles from './styles'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import JobsLeft from './JobsLeft/JobsLeft'
import JobsMain from './JobsMain/JobsMain'
import JobsRight from './JobsRight/JobsRight'

function Jobs () {
  const classes = styles()
  return (
    <Container className={classes.jobsPage} maxWidth={'lg'}>

      <Grid item md={2} lg={2} xl={2}>
        <JobsLeft/>
      </Grid>

      <Grid container spacing={2} alignItems={'flex-start'} justifyContent={'center'}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={5}>
          <JobsMain/>
        </Grid>

        <Grid item lg={3} xl={3}>
          <JobsRight/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Jobs
