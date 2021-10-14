import ImgToJobsPage from '../../../../shared/ImgToJobsPage/ImgToJobsPage'
import styles from './styles'
import React from 'react'

function MyJobsRight () {
  const classes = styles()

  return (
    <div className={classes.mainRight}>
      <ImgToJobsPage/>
    </div>
  )
}

export default MyJobsRight
