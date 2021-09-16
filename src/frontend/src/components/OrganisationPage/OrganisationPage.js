import styles from './styles'
import React from 'react'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import OrganisationRight from './OrganisationRight/OrganisationRight'

function OrganisationPage () {
  const classes = styles()

  return (
    <Container className={classes.profilePage} maxWidth={'lg'}>
      <Grid container spacing={4} alignItems={'flex-start'} justifyContent={'center'}>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>

        </Grid>
        <Grid item sm={3} md={3} lg={3} xl={3}>
          <OrganisationRight/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default OrganisationPage
