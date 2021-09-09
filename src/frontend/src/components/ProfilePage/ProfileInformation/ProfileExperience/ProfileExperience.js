import React from 'react'
import style from '../styles'
import Typography from '@material-ui/core/Typography'
import ProfileExperienceItem from './ProfileExperienceItem'
import {useDispatch} from 'react-redux'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import {ADD_NEW_EXPERIENCE} from '../../../../redux/Modal/modalTypes'
import AddIcon from '@material-ui/icons/Add'
import clsx from 'clsx'

const ProfileExperience = (props) => {
  const {workPlaces, isEditable} = props
  const classes = style()
  const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h3">
          Experience
        </Typography>
        <div
          className={clsx(!isEditable && classes.hidden)}
          onClick={() =>
            dispatch(toggleModalAction({modalType: ADD_NEW_EXPERIENCE}))}>
          <AddIcon className={classes.createIcon}/>
        </div>
      </div>
      <div>
        {workPlaces &&
        workPlaces
          .sort((wp1, wp2) => wp2.dateStart.localeCompare(wp1.dateStart)) // sorting in DESCENDING ORDER
          .map(workPlace => <ProfileExperienceItem
            key={workPlace.id}
            workPlace={workPlace}
            isEditable = {isEditable}
          />)}
      </div>
    </div>
  )
}

export default ProfileExperience
