import React from 'react'
import style from './styles'
import CreateIcon from '@material-ui/icons/Create'
import Typography from '@material-ui/core/Typography'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {useDispatch} from 'react-redux'
import {EDIT_EDUCATION} from '../../../redux/Modal/modalTypes'

const ProfileExperienceItem = (props) => {
  const {organization, position, dateStart, dateFinish} = props.workplace
  const classes = style()
  const dash = <span className={classes.dash}>-</span>
  const dispatch = useDispatch()

  return (
    <div className={classes.content}>
      <div className={classes.school}>
        <Typography variant="body1" className={classes.schoolName}>{position}</Typography>
        <Typography>{organization}</Typography>
        <Typography>{dateStart}{dash}{dateFinish}</Typography>
      </div>
      <div className={classes.btnCreate} onClick={() =>
        dispatch(toggleModalAction({modalType: EDIT_EDUCATION}))}>
        <CreateIcon className={classes.createIcon}/>
      </div>
    </div>
  )
}
export default ProfileExperienceItem