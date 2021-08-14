import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import styles from './styles'
import ProfileMain from './ProfileMain/ProfileMain'
import ProfileRight from './ProfileRight/ProfileRight'

function ProfilePage () {
  const classes = styles()

  return (
    <Container className={classes.container} maxWidth={'lg'} >
      <Grid container spacing={2} alignItems={'flex-start'} justifyContent={'center'} >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <ProfileMain/>
        </Grid>

        <Grid item sm={3} md={3} lg={2} xl={2}>
          <ProfileRight/>
        </Grid>
      </Grid>
    </Container>
  )
}
export default ProfilePage