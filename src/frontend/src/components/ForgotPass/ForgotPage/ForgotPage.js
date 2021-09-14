import React, {useEffect, useState} from 'react'
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
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
// import Preloader from '../../../shared/Preloader/Preloader'

function ForgotPage () {
  const classes = styles()
  const [firstForgotPage, setFirstForgotPage] = useState(true)
  const [isPasswordPage, setPasswordPage] = useState(false)
  // const [isLoading, setIsloading] = useState(false)
  const [hideEmail, setHideEmail] = useState('')
  const [inputtedUserEmail, setInputtedUserEmail] = useState('')
  const [anchorEl, setAnchorEl] = useState(null)
  const history = useHistory()
  let inputtedEmail = ''
  //
  // useEffect(() => {},
  //   [isPasswordPage, firstForgotPage, isLoading, inputtedEmail])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

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
      .put('api/forgot_password/', {
        email: inputtedEmail
      })
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
    inputtedEmail = inputtedUserEmail

    http
      .post('api/forgot_password/', {
        email: inputtedEmail,
        code: code
      })
      .then(res => {
        if (res.status === 200) {
          setPasswordPage(true)
        }
      })
      .catch(err => {
        const errorMsg = err.response.data.message
        toast.error(errorMsg)
      })
  }

  const handleNewPasswordSubmit = (values) => {
    const {newPassword, retypePassword} = values
    inputtedEmail = inputtedUserEmail
    if (newPassword === retypePassword) {
      http
        .put(`api/forgot_password/restore`, {
          email: inputtedEmail,
          password: newPassword
        })
        .then(res => {
          if (res.status === 200) {
            toast.info('Password was changed successful! Now you can sign in using your new password! ')
            setPasswordPage(false)
            history.push('/')
          }
        })
        .catch(err => {
          const errorMsg = err.response.data.message
          toast.error(errorMsg)
        })
    } else {
      toast.error('Entered passwords do not match!')
    }
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
          code: '',
          newPassword: '',
          retypePassword: ''
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
    : isPasswordPage
      ? <Paper elevation={3} className={clsx(classes.forgotPageCard, classes.thirdForgotPage)}>
        <div className={classes.mainTextContainerNewPassword}>
          <h2 className={classes.mainTextNewPassword}>Choose a new password</h2>
          <div className={classes.mainTextWrapperNewPassword}>
            <p className={classes.subTextSecond}>Create a new password that is at least 8 characters long.</p>
            <p aria-describedby={id} onClick={handleClick} className={classes.passwordPromptLink}>What makes a strong password</p>
          </div>
        </div>
        <Formik
          initialValues={{}}
          validationSchema={
            Yup.object().shape({
              newPassword: Yup.string()
                .matches('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$', 'Password must be: minimum eight characters, at least one letter, one number and one special character!')
                .required('Password is required'),
              retypePassword: Yup.string()
                .matches('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$', 'Password must be: minimum eight characters, at least one letter, one number and one special character!')
                .required('Password is required')
            })}
          onSubmit={(values, {resetForm}) => {
            handleNewPasswordSubmit(values)
            resetForm()
          }}
        >
          {() => (
            <Form className={classes.form} noValidate>
              <Field component={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                name="newPassword"
                label="New password"
                type="password"
                autoComplete="current-password"
              />
              <Field component={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                name="retypePassword"
                label="Retype new password"
                type="password"
                autoComplete="current-password"
              />
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
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Typography className={classes.popoverHeader}>Chose a strong password to protect your account
            Password must be: minimum eight characters, at least one letter, one number and one special character.
            It should not contain your name, phone number or email address.
          </Typography>
        </Popover>
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