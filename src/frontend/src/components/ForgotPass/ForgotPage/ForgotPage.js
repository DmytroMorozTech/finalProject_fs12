import React, {useRef, useState} from 'react'
import styles from './styles'
import TextField from '@material-ui/core/TextField'
import {Paper} from '@material-ui/core'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import http from '../../../services/httpService'
import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'
import clsx from 'clsx'

function ForgotPage () {
  const classes = styles()
  const emailRef = useRef('')
  const codeRef = useRef('')
  const [firstForgotPage, setFirstForgotPage] = useState(true)
  let inputtedEmail = ''

  const hideUserEmail = () => {
    const parsedEmail = inputtedEmail.split('@', 2)
    return parsedEmail[0].slice(0, 1) + '*****@' + parsedEmail[1] + '.'
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    inputtedEmail = emailRef.current.value.toLowerCase()

    http
      .post(`api/forgot_password/${inputtedEmail}`, {})
      .then(res => {
        if (res.status === 200) {
          setFirstForgotPage(false)
        }
      })
      .catch(err => {
        const errorMsg = err.response.data.message
        toast.error(errorMsg)
      })
  }

  const handleSecurityCodeSubmit = async (e) => {
    e.preventDefault()
    const securityCode = codeRef.current.value
    // http
    //   .post('api/auth', {
    //     email: inputtedEmail
    //   })
    //   .then(res => {
    //     if (res.status === 200) {
    //       let token = res.data.token
    //     }
    //   })
    //   .catch(err => {
    //     const errorMsg = err.response.data.message
    //     toast.error(errorMsg)
    //   })
  }
  return (firstForgotPage
    ? <Paper elevation={3} className={clsx(classes.forgotPageCard, classes.firstForgotPage)}>
      <div className={classes.mainTextContainer}>
        <h2 className={classes.mainText}>Forgot password?</h2>
        <p className={classes.subText}>Reset password in two quick steps</p>
      </div>
      <form className={classes.form} noValidate onSubmit={handleEmailSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          inputRef={emailRef}
        />
        <SharedButton
          className={classes.resetButton}
          type="submit"
          size="large"
          title="Reset password"
          fullWidth
          variant="contained"
          color="primary"
        />
      </form>
      <Link to="/" className={classes.signInLineLink}>Back</Link>
    </Paper>
    : <Paper elevation={3} className={clsx(classes.forgotPageCard, classes.secondForgotPage)}>
      <div className={classes.mainTextContainerSecond}>
        <h2 className={classes.mainTextSecond}>We sent a code to your email</h2>
        <div className={classes.mainTextWrapperSecond}>
          <p className={classes.subTextSecond}>Enter the 6-digit verification code sent to </p>
          <span className={clsx(classes.subTextSecond, classes.hideEmail)}>{hideUserEmail()}</span>
          <Link to="/forgot" className={classes.signInLineLinkChange}>Change</Link>
        </div>
      </div>
      <form className={classes.form} noValidate onSubmit={handleSecurityCodeSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="code"
          label="6 digit code"
          name="code"
          autoComplete="code"
          autoFocus
          inputRef={codeRef}
        />
        <p className={classes.signInLineLinkResetCode} onClick={() => handleEmailSubmit(inputtedEmail)}>Resend code</p>
        <SharedButton
          className={classes.resetButton}
          type="submit"
          size="large"
          title="Submit"
          fullWidth
          variant="contained"
          color="primary"
        />
      </form>
      <p className={classes.spamText}>If you don't see the email in your inbox, check your spam folder.</p>
    </Paper>
  )
}

export default ForgotPage