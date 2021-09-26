import React from 'react'
import styles from './styles'
import SharedButton from '../../shared/SharedButton/SharedButton'
import { Link } from 'react-router-dom'
import LinkedinLogo from '../../shared/LinkedinLogo/LinkedinLogo'
import Image from '../../shared/Image/Image'

function Page404 () {
  const classes = styles()

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Link exact to='/home' className={classes.link}>
          <LinkedinLogo/>
        </Link>
      </div>
      <Image
        imageUrl={'linkedin/general/jrn3axnlbe8gxborjqxb'}
        alt={'page 404'}
        className={classes.pageImg}
      />
      <h1>This page doesn't exist</h1>
      <h2 className={classes.text}>Please check your URL or return to LinkedIn home.</h2>
      <Link exact to='/home' className={classes.link}>
        <SharedButton title="Go to your feed" variant="outlined"/>
      </Link>
    </div>
  )
}

export default Page404
