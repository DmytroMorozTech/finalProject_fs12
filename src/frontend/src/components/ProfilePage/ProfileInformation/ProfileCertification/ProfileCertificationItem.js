import React from 'react'
import style from '../styles'
import CreateIcon from '@material-ui/icons/Create'
import Typography from '@material-ui/core/Typography'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import {useDispatch} from 'react-redux'
import convertLocalDateToString from '../../../../utils/convertLocalDateToString'
import { EDIT_CERTIFICATION } from '../../../../redux/Modal/modalTypes'
import clsx from 'clsx'

function ProfileCertificationItem (props) {
  const {name, expirationDate, issueDate, hasExpiryDate,
    issuingOrganization, credentialId, credentialUrl} = props.certification
  const {isEditable} = props

  const classes = style()
  const dispatch = useDispatch()
  const issuedMonthAndYear = convertLocalDateToString(issueDate)
  const expirationMonthAndYear = hasExpiryDate ? convertLocalDateToString(expirationDate) : ''

  return (
    <div className={classes.content}>
      <div>
        <Typography variant="body1" className={classes.title}>{name}</Typography>
        <Typography>{issuingOrganization}</Typography>
        <Typography>Issued: {issuedMonthAndYear}</Typography>
        <Typography> {hasExpiryDate ? `Expires: ${expirationMonthAndYear}` : 'No Expiration Date'} </Typography>
        {credentialId && <Typography>Credential ID: {credentialId}</Typography>}
        {credentialUrl && <Typography>Credential URL: {credentialUrl}</Typography>}
      </div>
      <div
        id='toggleModal'
        className={clsx(classes.btnCreate, !isEditable && classes.hidden)}
        onClick={() => dispatch(toggleModalAction(
          {modalType: EDIT_CERTIFICATION, certification: props.certification}
        ))}
      >
        <CreateIcon className={classes.createIcon}/>
      </div>
    </div>
  )
}

export default ProfileCertificationItem
