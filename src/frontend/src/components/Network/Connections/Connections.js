import styles from './styles'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import ConnectionsMain from './ConnectionsMain/ConnectionsMain'
import ConnectionsRight from './ConnectionsRight/ConnectionsRight'

function Connections () {
  const classes = styles()
  return (
    <Container className={classes.connections} maxWidth={'lg'}>
      <Grid container spacing={2} alignItems="flex-start" justifyContent="center">

        <Grid item xs={12} sm={7} md={7} lg={8} xl={8}>
          <ConnectionsMain/>
        </Grid>

        <Grid item xs={12} sm={5} md={4} lg={3}>
          <ConnectionsRight/>
        </Grid>

      </Grid>
    </Container>
  )
}

export default Connections