import React, {useRef} from 'react'
import {Paper} from '@material-ui/core'
import styles from './styles'
import TextField from '@material-ui/core/TextField'
import {GoogleLoginButton} from 'react-social-login-buttons'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import {useHistory} from 'react-router'
import http from '../../../services/httpService'
import {useDispatch, useSelector} from 'react-redux'
import {getActiveUserAction} from '../../../redux/User/userActions'
import {toast} from 'react-toastify'
import {activeUserSelector} from '../../../redux/User/userSelector'
// import Button from '@material-ui/core/Button'

const LoginCard = () => {
  const classes = styles()

  // TODO: Fix the error in the console related to useHistory
  const history = useHistory()
  const loginRef = useRef('')
  const passwordRef = useRef('')
  const dispatch = useDispatch()

  const activeUser = useSelector(activeUserSelector)
  const activeUserId = activeUser.id

  if (activeUserId) {
    history.push('/home')
  }

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
    <div>
      <Paper elevation={3} className={classes.card}>
        <div className={classes.signInLineWrapper}>
          <p className={classes.signInLine}>Sign in</p>
          <p className={classes.signInTagline}>Stay updated on your professional world</p>
        </div>
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
            inputRef={loginRef}
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
            inputRef={passwordRef}
          />
          <SharedButton
            type="submit"
            size="large"
            title="Sign In"
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
      </Paper>
    </div>
  )
}

export default LoginCard
