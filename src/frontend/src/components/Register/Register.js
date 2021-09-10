import React from 'react'
import styles from './styles'
import RegisterPage from './RegisterPage/RegisterPage'
import LinkedinLogo from '../../shared/LinkedinLogo/LinkedinLogo'

const Register = () => {
  const classes = styles()
  return (
    <div className={classes.register}>
      <div className={classes.registerHeader}>
        <LinkedinLogo/>
        <h1 className={classes.registerHeaderText}>Make the most of your professional life</h1>
      </div>
      <div className={classes.registerPage}>
        <RegisterPage/>
      </div>
    </div>
  )
}

export default Register