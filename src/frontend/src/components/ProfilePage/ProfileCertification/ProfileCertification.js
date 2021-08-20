import React from 'react'
import style from './styles'
import Typography from '@material-ui/core/Typography'
import ProfileCertificationItem from './ProfileCertificationItem'
import {useDispatch} from 'react-redux'
import toggleModalAction from '../../../redux/Modal/modalActions'
import { ADD_NEW_CERTIFICATION } from '../../../redux/Certification/certificationActionTypes'
import AddIcon from '@material-ui/icons/Add'

function ProfileCertification (props) {
  const classes = style()
  const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h3">
          Certification
        </Typography>
        <div onClick={() =>
          dispatch(toggleModalAction({modalType: ADD_NEW_CERTIFICATION}))}>
          <AddIcon className={classes.createIcon}/>
        </div>
      </div>
      <div>
        <ProfileCertificationItem/>
      </div>
    </div>
  )
}
export default ProfileCertification