import React from 'react'
import style from './styles'
import CreateIcon from '@material-ui/icons/Create'
import Typography from '@material-ui/core/Typography'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {useDispatch} from 'react-redux'
import {EDIT_EDUCATION} from '../../Modal/modalTypes'

const ProfileEducationItem = (props) => {
  const {school, degreeReceived, dateStart, dateFinish} = props.education
  const classes = style()
  const dash = <span className={classes.dash}>-</span>
  const dispatch = useDispatch()

  return (
    <div className={classes.content}>
      <div className={classes.school}>
        <Typography variant="body1" className={classes.schoolName}>{school}</Typography>
        <Typography>{degreeReceived}</Typography>
        <Typography>{dateStart}{dash}{dateFinish}</Typography>
      </div>
      <div className={classes.btnCreate} onClick={() =>
        dispatch(toggleModalAction({modalType: EDIT_EDUCATION}))}>
        <CreateIcon className={classes.createIcon}/>
      </div>
    </div>
  )
}
export default ProfileEducationItem