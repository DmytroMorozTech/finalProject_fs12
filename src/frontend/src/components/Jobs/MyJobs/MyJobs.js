import styles from './styles'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import MyJobsLeft from './MyJobsLeft/MyJobsLeft'
import MyJobsMain from './MyJobsMain/MyJobsMain'
import MyJobsRight from './MyJobsRight/MyJobsRight'

function MyJobs () {
  const classes = styles()

  return (
    <Container className={classes.myJobsPage} maxWidth={'lg'}>
      <Grid container spacing={2} alignItems="flex-start" justifyContent="center">

        <Grid item xs={12} sm={10} md={2} lg={2} xl={2}>
          <MyJobsLeft/>
        </Grid>

        <Grid item xs={12} sm={10} md={5} lg={6} xl={6}>
          <MyJobsMain/>
        </Grid>

        <Grid item xs={12} sm={10} md={3} lg={3} xl={3}>
          <MyJobsRight/>
        </Grid>

      </Grid>
    </Container>
  )
}

export default MyJobs
