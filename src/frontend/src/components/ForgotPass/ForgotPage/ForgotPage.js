import React, {useRef, useState} from 'react'
import styles from './styles'
import {Paper} from '@material-ui/core'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import http from '../../../services/httpService'
import {toast} from 'react-toastify'
import {TextField} from 'formik-material-ui'
import clsx from 'clsx'
import * as Yup from 'yup'
import {Field, Form, Formik} from 'formik'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router'

function ForgotPage () {
  const classes = styles()
  const [firstForgotPage, setFirstForgotPage] = useState(true)
  const [hideEmail, setHideEmail] = useState('')
  const [inputtedUserEmail, setInputtedUserEmail] = useState('')
  const history = useHistory()
  let inputtedEmail = ''

  const handleEmailSubmit = (values, isResend) => {
    if (!isResend) {
      const {email} = values
      inputtedEmail = email.toLowerCase()
      const parsedEmail = inputtedEmail.split('@', 2)
      setHideEmail(parsedEmail[0].slice(0, 1) + '*****@' + parsedEmail[1] + '.')
      setInputtedUserEmail(inputtedEmail)
    } else {
      inputtedEmail = inputtedUserEmail
    }

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

  const handleSecurityCodeSubmit = (values) => {
    const {code} = values
    console.log('here code: ' + code)
    inputtedEmail = inputtedUserEmail
    console.log(inputtedEmail)
    http
      .post(`forgot_password/${inputtedEmail}&${code}`)
      .then(res => {
        if (res.status === 200) {
          history.push('/')
          console.log('WIN!!!')
        }
      })
      .catch(err => {
        const errorMsg = err.response.data.message
        toast.error(errorMsg)
      })
  }

  return (firstForgotPage
    ? <Paper elevation={3} className={clsx(classes.forgotPageCard, classes.firstForgotPage)}>
      <div className={classes.mainTextContainer}>
        <h2 className={classes.mainText}>Forgot password?</h2>
        <p className={classes.subText}>Reset password in two quick steps</p>
      </div>
      <Formik
        initialValues={{
          email: '',
          code: ''
        }}
        validationSchema={
          Yup.object().shape({
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required')
          })}
        onSubmit={(values, {resetForm}) => {
          handleEmailSubmit(values, false)
          resetForm()
        }}
      >
        {() => (
          <Form className={classes.form} noValidate>
            <Field component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
          </Form>
        )}
      </Formik>
      <Link to="/" className={classes.signInLineLink}>Back</Link>
    </Paper>
    : <Paper elevation={3} className={clsx(classes.forgotPageCard, classes.secondForgotPage)}>
      <div className={classes.mainTextContainerSecond}>
        <h2 className={classes.mainTextSecond}>We sent a code to your email</h2>
        <div className={classes.mainTextWrapperSecond}>
          <p className={classes.subTextSecond}>Enter the 6-digit verification code sent to </p>
          <span className={clsx(classes.subTextSecond, classes.hideEmail)}>{hideEmail}</span>
          <p onClick={() => setFirstForgotPage(true)} className={classes.signInLineLinkChange}>Change</p>
        </div>
      </div>
      <Formik
        initialValues={{}}
        validationSchema={
          Yup.object().shape({
            code: Yup.number().typeError('Security code must be a number and has 6 digits')
              .required('Security code is required')
          })}
        onSubmit={(values, {resetForm}) => {
          handleSecurityCodeSubmit(values)
          resetForm()
        }}
      >
        {() => (
          <Form className={classes.form} noValidate>
            <Field component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="code"
              label="6 digit code"
              name="code"
              autoComplete="code"
              autoFocus
            />
            <p className={classes.signInLineLinkResetCode} onClick={() => handleEmailSubmit(inputtedEmail, true)}>Resend code</p>
            <SharedButton
              className={classes.resetButton}
              type="submit"
              size="large"
              title="Submit"
              fullWidth
              variant="contained"
              color="primary"
            />
          </Form>
        )}
      </Formik>
      <p className={classes.spamText}>If you don't see the email in your inbox, check your spam folder.</p>
    </Paper>
  )
}

export default ForgotPage