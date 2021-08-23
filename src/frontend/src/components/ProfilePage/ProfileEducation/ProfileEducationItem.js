import React from 'react'
import style from './styles'
import CreateIcon from '@material-ui/icons/Create'
import Typography from '@material-ui/core/Typography'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {useDispatch} from 'react-redux'
import {EDIT_EDUCATION} from '../../../redux/Modal/modalTypes'
import convertLocalDateToString from '../../../utils/convertLocalDateToString'

const ProfileEducationItem = (props) => {
  const {school, degreeReceived, dateStart, dateFinish,
    fieldOfStudy, description, activities} = props.education
  const classes = style()
  const dash = <span className={classes.dash}>-</span>
  const dispatch = useDispatch()

  const convertedDateStart = convertLocalDateToString(dateStart)
  const convertedDateFinish = convertLocalDateToString(dateFinish)

  return (
    <div className={classes.content}>
      <div className={classes.school}>
        <Typography variant="body1" className={classes.schoolName}>School: {school}</Typography>
        <Typography>Degree: {degreeReceived}</Typography>
        <Typography>{convertedDateStart}{dash}{convertedDateFinish}</Typography>
        <Typography>Field of study: {fieldOfStudy}</Typography>
        <Typography>Description: {description}</Typography>
        <Typography>Activities: {activities}</Typography>
      </div>
      <div className={classes.btnCreate} onClick={() =>
        dispatch(toggleModalAction({modalType: EDIT_EDUCATION, education: props.education}))}>
        <CreateIcon className={classes.createIcon}/>
      </div>
    </div>
  )
}
export default ProfileEducationItem