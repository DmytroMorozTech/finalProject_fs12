import React from 'react'
import style from './styles'
import Typography from '@material-ui/core/Typography'
import ProfileExperienceItem from './ProfileExperienceItem'
import {useDispatch} from 'react-redux'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {ADD_EXPERIENCE} from '../../../redux/Modal/modalTypes'
import AddIcon from '@material-ui/icons/Add'

const ProfileExperience = (props) => {
  const workPlaces = props.workPlaces
  const classes = style()
  const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h3">
                    Experience
        </Typography>
        <div onClick={() =>
          dispatch(toggleModalAction({modalType: ADD_EXPERIENCE}))}>
          <AddIcon className={classes.createIcon}/>
        </div>
      </div>
      <div>
        {workPlaces && workPlaces.map(workPlace => <ProfileExperienceItem key={workPlace.id} workPlace={workPlace}/>)}
      </div>
    </div>
  )
}

export default ProfileExperience