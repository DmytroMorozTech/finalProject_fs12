import styles from './styles'
import { Link } from 'react-router-dom'
import Image from '../Image/Image'
import React from 'react'

function ImgToJobsPage () {
  const classes = styles()

  return (
    <Link to="/jobs">
      <Image
        imageUrl={'linkedin/general/lsrqvmwtjzy4evnmj8dw'}
        alt={'jobs banner'}
        className={classes.img}
      />
    </Link>
  )
}

export default ImgToJobsPage
