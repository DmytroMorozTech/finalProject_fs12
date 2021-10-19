import styles from './styles'
import ImgToJobsPage from '../../../shared/ImgToJobsPage/ImgToJobsPage'
import React from 'react'

function NotificationsRight () {
  const classes = styles()

  return (
    <div className={classes.notificationsRight}>
      <ImgToJobsPage/>
    </div>
  )
}

export default NotificationsRight
