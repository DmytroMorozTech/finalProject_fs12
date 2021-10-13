import styles from './styles'
import ImgToJobsPage from '../../../../shared/ImgToJobsPage/ImgToJobsPage'
import React from 'react'

function InvitationManagerRight () {
  const classes = styles()

  return (
    <div className={classes.invitationManagerRight}>
      <ImgToJobsPage/>
    </div>
  )
}

export default InvitationManagerRight
