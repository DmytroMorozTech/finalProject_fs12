import styles from './styles'
import ImgToJobsPage from '../../../../shared/ImgToJobsPage/ImgToJobsPage'
import React from 'react'

function ConnectionsRight () {
  const classes = styles()

  return (
    <div className={classes.connectionsRight}>
      <ImgToJobsPage/>
    </div>
  )
}

export default ConnectionsRight
