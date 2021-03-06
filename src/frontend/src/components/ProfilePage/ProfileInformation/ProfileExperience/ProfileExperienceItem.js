import React from 'react'
import style from '../styles'
import CreateIcon from '@material-ui/icons/Create'
import Typography from '@material-ui/core/Typography'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import {useDispatch} from 'react-redux'
import convertLocalDateToString from '../../../../utils/convertLocalDateToString'
import {EDIT_EXPERIENCE} from '../../../../redux/Modal/modalTypes'
import clsx from 'clsx'

const ProfileExperienceItem = (props) => {
  const {organization, position, dateStart, dateFinish, responsibilities} = props.workPlace
  const {isEditable} = props
  const dateStartConverted = convertLocalDateToString(dateStart)
  const dateFinishConverted = dateFinish ? convertLocalDateToString(dateFinish) : ''

  const classes = style()
  const dash = <span className={classes.dash}>-</span>
  const dispatch = useDispatch()

  return (
    <div className={classes.content}>
      <div>
        <Typography variant="body1" className={classes.title}>Position: {position}</Typography>
        <Typography>Organization: {organization.name}</Typography>
        <Typography>{dateStartConverted} {dash} {dateFinish ? dateFinishConverted : 'Present time'}</Typography>
        <Typography>Responsibilities: {responsibilities}</Typography>
      </div>
      <div
        id='toggleModal'
        className={clsx(classes.btnCreate, !isEditable && classes.hidden)}
        onClick={() =>
          dispatch(toggleModalAction({modalType: EDIT_EXPERIENCE, workPlace: props.workPlace}))}>
        <CreateIcon className={classes.createIcon}/>
      </div>
    </div>
  )
}

export default ProfileExperienceItem
