import React from 'react'
import styles from './styles'
import ForgotPage from './ForgotPage/ForgotPage'
import {Link} from 'react-router-dom'
import LinkedinLogo from '../../shared/LinkedinLogo/LinkedinLogo'

const Forgot = () => {
  const classes = styles()
  return (
    <div className={classes.forgot}>
      <div className={classes.header}>
        <Link exact to="/home" className={classes.link}>
          <LinkedinLogo/>
        </Link>
        <div className={classes.headerTextContainer}>
          <Link to="/" className={classes.signInLineLink}>Sign in</Link>
          <Link to="/signup" className={classes.joinNowBtn}>Join now</Link>
        </div>
      </div>
      <div className={classes.forgotPage}>
        <ForgotPage/>
      </div>
    </div>
  )
}

export default Forgot