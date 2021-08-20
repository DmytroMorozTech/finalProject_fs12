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
      <Grid container spacing={2} alignItems="flex-start" justifyContent="center">

        <Grid item xs={12} sm={5} md={4} lg={3}>
          <NetworkLeft/>
        </Grid>

        <Grid item xs={12} sm={7} md={7} lg={8} xl={8}>
          <NetworkMain/>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Network
