import React from 'react'
import styles from './styles'
import RegisterPage from './RegisterPage/RegisterPage'

const Register = () => {
  const classes = styles()
  return (
    <div className={classes.register}>
      <div className={classes.registerPage}>
        <RegisterPage/>
      </div>
    </div>
  )
}

export default Register