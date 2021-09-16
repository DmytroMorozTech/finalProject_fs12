import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { Container, Hidden } from '@material-ui/core'
import styles from './styles'
import ProfileMain from './ProfileMain/ProfileMain'
import ProfileRight from './ProfileRight/ProfileRight'
import ProfileEducation from './ProfileInformation/ProfileEducation/ProfileEducation'
import { getActiveProfileAction } from '../../redux/Profile/profileActions'
import { useDispatch, useSelector } from 'react-redux'
import {activeProfileSelector, isLoadingProfileSelector} from '../../redux/Profile/profileSelector'
import Preloader from '../../shared/Preloader/Preloader'
import ProfileCertification from './ProfileInformation/ProfileCertification/ProfileCertification'
import ProfileExperience from './ProfileInformation/ProfileExperience/ProfileExperience'
import { activeUserSelector } from '../../redux/User/userSelector'

function ProfilePage (props) {
  const classes = styles()
  const userId = props.match.params.id
  const dispatch = useDispatch()

  const activeProfile = useSelector(activeProfileSelector)
  const profileIsLoading = useSelector(isLoadingProfileSelector)
  const activeUser = useSelector(activeUserSelector)
  const isEditable = activeProfile.id === activeUser.id

  useEffect(() => {
    dispatch(getActiveProfileAction(userId))
  }, [dispatch, userId])

  return (
    <Container className={classes.profilePage} maxWidth={'lg'}>
      <Grid container spacing={4} alignItems={'flex-start'} justifyContent={'center'}>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
          {profileIsLoading && <Preloader/>}
          {!profileIsLoading &&
          <>
            <ProfileMain profile={activeProfile} isEditable={isEditable}/>
            <ProfileExperience workPlaces={activeProfile.workPlaces} isEditable={isEditable}/>
            <ProfileEducation educations={activeProfile.educations} isEditable={isEditable}/>
            <ProfileCertification certifications={activeProfile.certifications} isEditable={isEditable}/>
          </>
          }
        </Grid>

        <Hidden smDown>
          <Grid item md={3} lg={3} xl={3}>
            <ProfileRight/>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}

export default ProfilePage
