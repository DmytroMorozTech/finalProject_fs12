import React from 'react'
import styles from './styles'
import imgPage from '../../../temporaryImages/page404img.png'
import SharedButton from '../../../shared/Button/SharedButton'
import { Link } from 'react-router-dom'
import LinkedinLogo from '../../../shared/LinkedinLogo/LinkedinLogo'

function Page404 () {
  const classes = styles()

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <LinkedinLogo/>
      </div>
      <img alt="page 404" src={imgPage} className={classes.pageImg}/>
      <h1>This page doesn't exist</h1>
      <h2>Please check your URL or return to LinkedIn home.</h2>
      <Link exact to='/home' className={classes.link}>
        <SharedButton title="Go to your feed" variant="outlined"/>
      </Link>
    </div>
  )
}

export default Page404
