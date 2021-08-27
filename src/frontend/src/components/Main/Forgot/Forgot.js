import React from 'react'
import styles from './styles'
import ForgotPage from './ForgotPage/ForgotPage'
import { Link } from 'react-router-dom'
import LinkedinLogo from '../../../shared/LinkedinLogo/LinkedinLogo'
import SharedButton from '../../../shared/Button/SharedButton'

const Forgot = () => {
  const classes = styles()
  return (
    <div className={classes.forgot}>
      <div className={classes.header}>
        <Link exact to='/home' className={classes.link}>
          <LinkedinLogo/>
        </Link>
        <Link exact to='/login' className={classes.link}>
          <SharedButton title='Sign In'/>
        </Link>
      </div>
      <div className={classes.forgotPage}>
        <ForgotPage/>
      </div>
    </div>
  )
}

export default Forgot