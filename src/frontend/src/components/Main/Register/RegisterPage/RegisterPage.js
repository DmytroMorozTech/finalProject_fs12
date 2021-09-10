import React, {useRef} from 'react'
import styles from './styles'
import SharedButton from '../../../../shared/SharedButton/SharedButton'
import {GoogleLoginButton} from 'react-social-login-buttons'
import TextField from '@material-ui/core/TextField'
import { Link, Paper } from '@material-ui/core'
import http from '../../../../services/httpService'
import {toast} from 'react-toastify'
import {getActiveUserAction} from '../../../../redux/User/userActions'
import {useHistory} from 'react-router'
import {useDispatch} from 'react-redux'

function RegisterPage () {
  const classes = styles()

  const history = useHistory()
  const loginRef = useRef('')
  const passwordRef = useRef('')
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    let inputtedLogin = loginRef.current.value
    let inputtedPassword = passwordRef.current.value

    http
      .post('api/auth', {
        login: inputtedLogin,
        password: inputtedPassword
      })
      .then(res => {
        if (res.status === 200) {
          let token = res.data.token
          localStorage.setItem('token', token)
          dispatch(getActiveUserAction())
          history.push('/home')
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

  return (
    <Paper elevation={3} className={classes.registerPageCard}>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <SharedButton
          type="submit"
          size="large"
          title="Register"
          fullWidth
          variant="contained"
          color="primary"
        />
      </form>
      <div className={classes.google}>
        <section>
          <div/>
          <p>OR</p>
          <div/>
        </section>
        <div className={classes.googleBtn}>
          <GoogleLoginButton onClick={() => authenticateByGoogle()}/>
        </div>
      </div>
      <div className={classes.readyLinkedIn}>
        <h4>Already have Linkedin account</h4>
        <Link exact to='/login' className={classes.link}>
          <SharedButton title='Return to login page'/>
        </Link>
      </div>
    </Paper>
  )
}

export default RegisterPage