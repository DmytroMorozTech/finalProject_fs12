import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import styles from './styles'
import ProfileMain from './ProfileMain/ProfileMain'
import ProfileRight from './ProfileRight/ProfileRight'
import ProfileEducation from './ProfileEducation/ProfileEducation'
import { getActiveProfileAction } from '../../redux/Profile/profileActions'
import { useDispatch, useSelector } from 'react-redux'
import {activeProfileSelector, isLoadingProfileSelector} from '../../redux/Profile/profileSelector'
import Preloader from '../../shared/Preloader/Preloader'
import ProfileCertification from './ProfileCertification/ProfileCertification'
import ProfileExperience from './ProfileExperience/ProfileExperience'

function ProfilePage (props) {
  const classes = styles()
  const userId = props.match.params.id
  const dispatch = useDispatch()

  const activeProfile = useSelector(activeProfileSelector)
  const profileIsLoading = useSelector(isLoadingProfileSelector)

  useEffect(() => {
    dispatch(getActiveProfileAction(userId))
  }, [dispatch, userId])

  return (
    <Container className={classes.profilePage} maxWidth={'lg'}>
      <Grid container spacing={2} alignItems={'flex-start'} justifyContent={'center'}>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
          {profileIsLoading && <Preloader/>}
          {!profileIsLoading &&
          <>
            <ProfileMain profile={activeProfile}/>
            <ProfileExperience workPlaces={activeProfile.workPlaces}/>
            <ProfileEducation educations={activeProfile.educations}/>
            <ProfileCertification certifications={activeProfile.certifications}/>
          </>
          }
        </Grid>

        <Grid item sm={3} md={3} lg={3} xl={3}>
          <ProfileRight/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProfilePage
