import React from 'react'
import style from './styles'
import Typography from '@material-ui/core/Typography'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import ProfileEducationItem from './ProfileEducationItem'
import {useDispatch} from 'react-redux'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {ADD_EDUCATION} from '../../Modal/modalTypes'

const ProfileEducation = (props) => {
  const educations = props.educations
  const classes = style()
  const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h3">
          Education
        </Typography>
        <div onClick={() =>
          dispatch(toggleModalAction({modalType: ADD_EDUCATION}))}>
          <AddCircleOutlineIcon/>
        </div>
      </div>
      <div>
        {educations && educations.map(education => <ProfileEducationItem key={education.id} education={education}/>)}
      </div>
    </div>
  )
}

export default ProfileEducation