import React from 'react'
import style from './styles'
import CreateIcon from '@material-ui/icons/Create'
import Typography from '@material-ui/core/Typography'
import toggleModalAction from '../../../redux/Modal/modalActions'
import {useDispatch} from 'react-redux'
import convertLocalDateToString from '../../../utils/convertLocalDateToString'
import { EDIT_CERTIFICATION } from '../../../redux/Modal/modalTypes'

function ProfileCertificationItem (props) {
  const {name, expirationDate, issueDate, hasExpiryDate, issuingOrganization, credentialId, credentialUrl} = props.certification

  const classes = style()
  const dispatch = useDispatch()
  const issuedMonthAndYear = convertLocalDateToString(issueDate)
  const expirationMonthAndYear = hasExpiryDate ? convertLocalDateToString(expirationDate) : ''

  return (
    <div className={classes.content}>
      <div className={classes.school}>
        <Typography variant="body1" className={classes.schoolName}>{name}</Typography>
        <Typography>{issuingOrganization}</Typography>
        <Typography>Issued: {issuedMonthAndYear}</Typography>
        <Typography> {hasExpiryDate ? `Expires: ${expirationMonthAndYear}` : 'No Expiration Date'} </Typography>
        <Typography>Credential ID: {credentialId}</Typography>
        <Typography>Credential URL: {credentialUrl}</Typography>
      </div>
      <div className={classes.btnCreate} onClick={() =>
        dispatch(toggleModalAction({modalType: EDIT_CERTIFICATION, certification: props.certification}))
      }>
        <CreateIcon className={classes.createIcon}/>
      </div>
    </div>
  )
}
export default ProfileCertificationItem