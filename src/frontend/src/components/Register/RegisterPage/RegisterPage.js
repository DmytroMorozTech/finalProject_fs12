import React, { useState } from 'react'
import styles from './styles'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import { TextField } from 'formik-material-ui'
import { Paper, Typography } from '@material-ui/core'
import http from '../../../services/httpService'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import Image from '../../../shared/Image/Image'

function RegisterPage () {
  const classes = styles()

  const history = useHistory()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [firstSignUpPage, setFirstSignUpPage] = useState(true)

  const handleLoginSubmit = (data) => {
    const {email, password} = data
    setLogin(email)
    setPassword(password)
    setFirstSignUpPage(false)
  }

  const handleUserSubmit = (data) => {
    const {firstName, lastName} = data

    http
      .post('/api/signup', {
        email: login,
        password: password,
        firstName: firstName,
        lastName: lastName
      })
      .then(res => {
        if (res.status === 200) {
          toast.info('You have signed up successfully! Now you can sign in! ')
          setFirstSignUpPage(true)
          history.push('/')
        }
      })
      .catch(err => {
        const errorMsg = err.response.data.message
        toast.error(errorMsg)
        history.push('/')
      })
  }

  const authenticateByGoogle = () => {
    const currentURL = window.location.href
    const baseURL = currentURL.split('/signup')[0]
    document.location.href = baseURL + '/oauth2/authorization/google'
  }

  return (firstSignUpPage
    ? <Paper elevation={3} className={clsx(classes.registerPageCard, classes.firstSignUpPage)}>
      <p className={classes.title}>Sign up</p>
      <Typography variant='h3' className={classes.subtitle}>
        Make the most of your professional life
      </Typography>
      <div className={classes.registerBody}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            firstName: '',
            lastName: ''
          }}
          validationSchema={
            Yup.object().shape({
              email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
              password: Yup.string()
                .matches('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$', 'Password must be: minimum eight characters, at least one letter, one number and one special character!')
                .required('Password is required')
            })}
          onSubmit={(values, {resetForm}) => {
            handleLoginSubmit(values)
            resetForm()
          }}
        >
          {() => (
            <Form className={classes.form}>
              <Field component={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText="Please Enter Email"
                autoFocus
              />
              <Field component={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password (8 or more characters)"
                type="password"
                autoComplete="current-password"
              />
              <SharedButton
                className={classes.joinButton}
                type="submit"
                size="large"
                title="Join"
                fullWidth
                variant="contained"
                color="primary"
              />
            </Form>
          )}
        </Formik>
        <div className={classes.google}>
          <section>
            <div/>
            <p>or</p>
            <div/>
          </section>
          <div className={classes.googleBtnWrapper}>
            <button id='googleBtn' className={classes.googleBtn} onClick={() => authenticateByGoogle()}>
              <Image
                imageUrl={'linkedin/general/niaqwol8ifep3qjapufb'}
                alt={'job'}
              />
              <span>Join with Google</span>
            </button>
          </div>
        </div>
        <div className={classes.signInLineWrapper}>
          <p>Already on LinkedIn?</p>
          <Link to="/" className={classes.signInLineLink}>Sign in</Link>
        </div>
      </div>
    </Paper>
    : <Paper elevation={3} className={clsx(classes.registerPageCard, classes.secondSignUpPage)}>
      <p className={classes.title}>Sign up</p>
      <Typography variant='h3' className={classes.subtitle}>
        Make the most of your professional life
      </Typography>
      <div className={classes.registerBody}>
        <Formik
          initialValues={{}}
          validationSchema={
            Yup.object().shape({
              firstName: Yup.string()
                .required('First Name is required'),
              lastName: Yup.string()
                .required('Last Name is required')
            })}
          onSubmit={(values, {resetForm}) => {
            handleUserSubmit(values)
            resetForm()
          }}
        >
          {() => (
            <Form className={classes.form}>
              <Field component={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                type="text"
                label="First Name"
                name="firstName"
                helperText="Please Enter First Name"
                autoFocus
              />
              <Field component={TextField}
                variant="outlined"
                margin="normal"
                fullWidth
                name="lastName"
                label="Last Name"
                type="text"
                helperText="Please Enter Last Name"
              />
              <SharedButton
                className={classes.joinButton}
                type="submit"
                size="large"
                title="Continue"
                fullWidth
                variant="contained"
                color="primary"
              />
            </Form>
          )}
        </Formik>
      </div>
    </Paper>
  )
}

export default RegisterPage
