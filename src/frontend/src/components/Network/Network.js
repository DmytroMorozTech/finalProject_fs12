import React from 'react'
import styles from './styles'
import NetworkMain from './NetworkMain/NetworkMain'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import NetworkLeft from './NetworkLeft/NetworkLeft'

function Network () {
  const classes = styles()
  return (
    <Container className={classes.network} maxWidth={'lg'}>
      <Grid container spacing={4} justifyContent="center">

        <Grid item className={classes.networkLeft}>
          <NetworkLeft/>
        </Grid>

        <Grid item className={classes.networkMain}>
          <NetworkMain/>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Network
