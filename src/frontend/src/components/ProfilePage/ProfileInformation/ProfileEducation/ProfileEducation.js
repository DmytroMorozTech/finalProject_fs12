import React from 'react'
import style from '../styles'
import Typography from '@material-ui/core/Typography'
import ProfileEducationItem from './ProfileEducationItem'
import {useDispatch} from 'react-redux'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import {ADD_NEW_EDUCATION} from '../../../../redux/Modal/modalTypes'
import AddIcon from '@material-ui/icons/Add'
import clsx from 'clsx'

const ProfileEducation = (props) => {
  const {educations, isEditable} = props
  const classes = style()
  const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h3">
          Education
        </Typography>
        <div
          className={clsx(!isEditable && classes.hidden)}
          onClick={() =>
            dispatch(toggleModalAction({modalType: ADD_NEW_EDUCATION}))}>
          <AddIcon className={classes.createIcon}/>
        </div>
      </div>
      <div>
        {educations &&
        educations
          .sort((edu1, edu2) => edu2.dateStart.localeCompare(edu1.dateStart))
          .map(education => <ProfileEducationItem
            key={education.id}
            education={education}
            isEditable = {isEditable}
          />)}
      </div>
    </div>
  )
}

export default ProfileEducation
