import React, {useState} from 'react'
import styles from './styles'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import {TextField} from 'formik-material-ui'
import {Paper} from '@material-ui/core'
import http from '../../../services/httpService'
import {toast} from 'react-toastify'
import {useHistory} from 'react-router'
import logo from './additions/icons8-google.svg'
import {Link} from 'react-router-dom'
import {Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'

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
      .post('api/signup', {
        email: login,
        password: password,
        firstName: firstName,
        lastName: lastName
      })
      .then(res => {
        if (res.status === 200) {
          toast.info('You have signed up successful! Now you can sign in! ')
          setFirstSignUpPage(true)
          history.push('/')
        }
      })
      .catch(err => {
        const errorMsg = err.response.data.message
        toast.error(errorMsg)
      })
  }

  const authenticateByGoogle = () => {
    http
      .get('http://localhost:9000/oauth2/authorization/google')
      .then(res => {
        if (res.status === 200) {
          history.push('/home')
        }
      })
      .catch(err => {
        const errorMsg = err.response.data.message
        toast.error(errorMsg)
      })
  }

  return (firstSignUpPage
    ? <Paper elevation={3} className={clsx(classes.registerPageCard, classes.firstSignUpPage)}>
      <Formik
        initialValues={{
          email: '',
          password: ''
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
          resetForm({email: '', password: ''})
        }}
      >
        {() => (
          <Form className={classes.form}>
            <Field component={TextField}
              variant="outlined"
              margin="normal"
              required
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
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              // autoComplete="current-password"
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
          <button className={classes.googleBtn} onClick={() => authenticateByGoogle()}>
            <img src={logo} alt={logo}/>
            <span>Join with Google</span>
          </button>
        </div>
      </div>
      <div className={classes.signInLineWrapper}>
        <p>Already on LinkedIn?</p>
        <Link to="/" className={classes.signInLineLink}>Sign in</Link>
      </div>
    </Paper>
    : <Paper elevation={3} className={clsx(classes.registerPageCard, classes.secondSignUpPage)}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: ''
        }}
        validationSchema={
          Yup.object().shape({
            firstName: Yup.string()
              .required('First name is required'),
            lastName: Yup.string()
              .required('Last name is required')
          })}
        onSubmit={(values, {resetForm}) => {
          handleUserSubmit(values)
          resetForm({firstName: '', lastName: ''})
        }}
      >
        {() => (
          <Form className={classes.form}>
            <Field component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="text"
              label="First name"
              name="firstName"
              autoComplete="firstName"
              helperText="Please Enter First Name"
              autoFocus
            />
            <Field component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              type="text"
              autoComplete="lastName"
              autoFocus
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
    </Paper>
  )
}

export default RegisterPage