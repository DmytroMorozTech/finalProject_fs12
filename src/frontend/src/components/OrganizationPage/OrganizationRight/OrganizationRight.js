import styles from './styles'
import ImgToJobsPage from '../../../shared/ImgToJobsPage/ImgToJobsPage'
import React from 'react'

function OrganizationRight () {
  const classes = styles()

  return (
    <div className={classes.organisationRight}>
      <ImgToJobsPage/>
    </div>
  )
}

export default OrganizationRight
