import React from 'react'
import style from './styles'
import CreateIcon from '@material-ui/icons/Create'
import Typography from '@material-ui/core/Typography'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {useDispatch} from 'react-redux'
import { UPDATE_CERTIFICATION } from '../../../redux/Certification/certificationActionTypes'

function ProfileCertificationItem (props) {
  const {
    Name = 'DAN-IT Education',
    issOrg = 'DAN-IT',
    IssueDateMonth = 'April',
    IssueDateYear = '2019',
    ExpirationDateMonth = 'April',
    ExpirationDateYear = '2049',
    CredentialID = '2987553783',
    CredentialUrl = 'https://https://dan-it.com.ua/'
  } = props

  const classes = style()
  const dispatch = useDispatch()

  return (
    <div className={classes.content}>
      <div className={classes.school}>
        <Typography variant="body1" className={classes.schoolName}>{Name}</Typography>
        <Typography>{issOrg}</Typography>
        <Typography>Issued {IssueDateMonth} {IssueDateYear}</Typography>
        <Typography>Expires {ExpirationDateMonth} {ExpirationDateYear}</Typography>
        <Typography>Credential ID {CredentialID}</Typography>
        <Typography>Credential URL {CredentialUrl}</Typography>
      </div>
      <div className={classes.btnCreate} onClick={() =>
        dispatch(toggleModalAction({modalType: UPDATE_CERTIFICATION}))}>
        <CreateIcon className={classes.createIcon}/>
      </div>
    </div>
  )
}
export default ProfileCertificationItem