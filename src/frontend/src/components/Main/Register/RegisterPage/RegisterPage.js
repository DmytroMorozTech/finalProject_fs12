import React, {useRef} from 'react'
import styles from './styles'
import SharedButton from '../../../../shared/SharedButton/SharedButton'
import TextField from '@material-ui/core/TextField'
import {Paper} from '@material-ui/core'
import http from '../../../../services/httpService'
import {toast} from 'react-toastify'
import {getActiveUserAction} from '../../../../redux/User/userActions'
import {useHistory} from 'react-router'
import {useDispatch} from 'react-redux'
import logo from './additions/icons8-google.svg'
import {Link} from 'react-router-dom'

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
          className={classes.joinButton}
          type="submit"
          size="large"
          title="Join"
          fullWidth
          variant="contained"
          color="primary"
        />
      </form>
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
  )
}

export default RegisterPage