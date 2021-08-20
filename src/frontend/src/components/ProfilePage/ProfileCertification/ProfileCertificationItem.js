import React from 'react'
import style from './styles'
import CreateIcon from '@material-ui/icons/Create'
import Typography from '@material-ui/core/Typography'
// import toggleModalAction from '../../../redux/Modal/modalActions'
// import {useDispatch} from 'react-redux'
// import { UPDATE_CERTIFICATION } from '../../../redux/Certification/certificationActionTypes'
import convertLocalDateToString from '../../../utils/convertLocalDateToString'

function ProfileCertificationItem (props) {
  const {certification: cert} = props

  const classes = style()
  // const dispatch = useDispatch()
  const issuedMonthAndYear = convertLocalDateToString(cert.issueDate)
  const hasExpiryDate = cert.hasExpiryDate
  const expirationMonthAndYear = hasExpiryDate ? convertLocalDateToString(cert.expirationDate) : ''

  return (
    <div className={classes.content}>
      <div className={classes.school}>
        <Typography variant="body1" className={classes.schoolName}>{cert.name}</Typography>
        <Typography>{cert.issuingOrganization}</Typography>
        <Typography>Issued {issuedMonthAndYear}</Typography>
        <Typography> {hasExpiryDate ? `Expires: ${expirationMonthAndYear}` : 'No Expiration Date'} </Typography>
        <Typography>Credential ID: {cert.credentialId}</Typography>
        <Typography>Credential URL: {cert.credentialUrl}</Typography>
      </div>
      <div className={classes.btnCreate} onClick={() =>
        // dispatch(toggleModalAction({modalType: UPDATE_CERTIFICATION}))
        console.log('Hello')
      }>
        <CreateIcon className={classes.createIcon}/>
      </div>
    </div>
  )
}
export default ProfileCertificationItem