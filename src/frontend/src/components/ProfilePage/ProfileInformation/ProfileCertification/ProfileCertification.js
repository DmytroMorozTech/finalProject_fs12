import React from 'react'
import style from '../styles'
import Typography from '@material-ui/core/Typography'
import ProfileCertificationItem from './ProfileCertificationItem'
import { useDispatch } from 'react-redux'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import { ADD_NEW_CERTIFICATION } from '../../../../redux/Modal/modalTypes'
import AddIcon from '@material-ui/icons/Add'
import clsx from 'clsx'

function ProfileCertification (props) {
  const {certifications, isEditable} = props
  const classes = style()
  const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h3">
          Licenses & certifications
        </Typography>
        <div
          id='toggleModal'
          className={clsx(!isEditable && classes.hidden)}
          onClick={() =>
            dispatch(toggleModalAction({modalType: ADD_NEW_CERTIFICATION}))}>
          <AddIcon className={classes.createIcon}/>
        </div>
      </div>
      <div>
        {certifications &&
        certifications
          .sort((cert1, cert2) => cert2.issueDate.localeCompare(cert1.issueDate))
          .map(
            certification => <ProfileCertificationItem
              key={certification.id}
              certification = {certification}
              isEditable = {isEditable}
            />)}
      </div>
    </div>
  )
}

export default ProfileCertification
