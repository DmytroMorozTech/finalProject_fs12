import React from 'react'
import styles from './styles'
import LinkedinLogo from '../../shared/LinkedinLogo/LinkedinLogo'
import RegisterGooglePage from './RegisterGooglePage/RegisterGooglePage'
import RegisterPage from './RegisterPage/RegisterPage'

const Register = (props) => {
  const {isByGoogle} = props
  const classes = styles()
  return (
    <div className={classes.register}>
      <div className={classes.registerHeader}>
        <LinkedinLogo/>
        <h1 className={classes.registerHeaderText}>Make the most of your professional life</h1>
      </div>
      <div className={classes.registerPage}>
        {isByGoogle ? <RegisterGooglePage/> : <RegisterPage/>}
      </div>
    </div>
  )
}

export default Register