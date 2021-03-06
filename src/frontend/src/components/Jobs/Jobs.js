import React from 'react'
import styles from './styles'
import Grid from '@material-ui/core/Grid'
import { Container, Hidden } from '@material-ui/core'
import JobsLeft from './JobsLeft/JobsLeft'
import JobsMain from './JobsMain/JobsMain'
import JobsRight from './JobsRight/JobsRight'
import JobsSmall from './JobsSmall/JobsSmall'

function Jobs () {
  const classes = styles()

  return (
    <Container className={classes.jobsPage} maxWidth={'lg'}>
      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">

        <Hidden xsDown>
          <Grid item lg={2} xl={2}>
            <JobsLeft/>
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={7} md={5} lg={6} xl={6}>
          <Hidden smUp>
            <JobsSmall/>
          </Hidden>
          <JobsMain/>
        </Grid>

        <Grid item>
          <Hidden smDown>
            <JobsRight/>
          </Hidden>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Jobs
