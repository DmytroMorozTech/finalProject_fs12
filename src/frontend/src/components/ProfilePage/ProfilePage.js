import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import styles from './styles'
import ProfileMain from './ProfileMain/ProfileMain'
import ProfileRight from './ProfileRight/ProfileRight'
import ProfileEducation from './ProfileEducation/ProfileEducation'
import ProfileCertification from './ProfileCertification/ProfileCertification'

function ProfilePage () {
  const classes = styles()

  return (
    <Container className={classes.profilePage} maxWidth={'lg'}>
      <Grid container spacing={2} alignItems={'flex-start'} justifyContent={'center'}>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
          <ProfileMain/>
          <ProfileEducation/>
          <ProfileCertification/>
        </Grid>

        <Grid item sm={3} md={3} lg={3} xl={3}>
          <ProfileRight/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProfilePage
