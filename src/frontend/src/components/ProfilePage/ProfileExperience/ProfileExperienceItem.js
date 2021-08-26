import React from 'react'
import style from './styles'
import CreateIcon from '@material-ui/icons/Create'
import Typography from '@material-ui/core/Typography'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {useDispatch} from 'react-redux'
import {UPDATE_EXPERIENCE} from '../../../redux/Profile/profileActionTypes'
import convertLocalDateToString from '../../../utils/convertLocalDateToString'

const ProfileExperienceItem = (props) => {
  const {organization, position, dateStart, dateFinish, responsibilities} = props.workPlace
  const dateStartConverted = convertLocalDateToString(dateStart)
  const dateFinishConverted = dateFinish ? convertLocalDateToString(dateFinish) : ''

  const classes = style()
  const dash = <span className={classes.dash}>-</span>
  const dispatch = useDispatch()

  return (
    <div className={classes.content}>
      <div className={classes.school}>
        <Typography variant="body1" className={classes.schoolName}>Position:{position}</Typography>
        <Typography>Organisation: {organization.name}</Typography>
        <Typography>{dateStartConverted}{dash}{dateFinish ? dateFinishConverted : 'Present time'}</Typography>
        <Typography>Responsibilities:{responsibilities}</Typography>
      </div>
      <div className={classes.btnCreate} onClick={() =>
        dispatch(toggleModalAction({modalType: UPDATE_EXPERIENCE, workPlace: props.workPlaces}))}>
        <CreateIcon className={classes.createIcon}/>
      </div>
    </div>
  )
}
export default ProfileExperienceItem