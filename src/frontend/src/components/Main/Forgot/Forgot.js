import React from 'react'
import styles from './styles'
import ForgotPage from './ForgotPage/ForgotPage'

const Forgot = () => {
  const classes = styles()
  return (
    <div className={classes.forgot}>
      <div className={classes.forgotPage}>
        <ForgotPage/>
      </div>
    </div>
  )
}

export default Forgot