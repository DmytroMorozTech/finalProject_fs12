import styles from './styles'
import ImgToJobsPage from '../../../shared/ImgToJobsPage/ImgToJobsPage'
import React from 'react'

function MainRight () {
  const classes = styles()

  return (
    <div className={classes.mainRight}>
      <ImgToJobsPage/>
    </div>
  )
}

export default MainRight
