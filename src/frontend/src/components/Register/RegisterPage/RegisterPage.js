import React, {useRef, useState} from 'react'
import styles from './styles'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import TextField from '@material-ui/core/TextField'
import {Paper} from '@material-ui/core'
import http from '../../../services/httpService'
import {toast} from 'react-toastify'
import {useHistory} from 'react-router'
import logo from './additions/icons8-google.svg'
import {Link} from 'react-router-dom'

function RegisterPage () {
  const classes = styles()

  const history = useHistory()
  const loginRef = useRef('')
  const passwordRef = useRef('')
  const firstNameRef = useRef('')
  const lastNameRef = useRef('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [firstSignUpPage, setFirstSignUpPage] = useState(true)

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setLogin(loginRef.current.value)
    setPassword(passwordRef.current.value)
    setFirstSignUpPage(false)
  }

  const handleUserSubmit = async (e) => {
    e.preventDefault()
    let inputtedFirstName = firstNameRef.current.value
    let inputtedLastName = lastNameRef.current.value

    http
      .post('api/signup', {
        email: login,
        password: password,
        firstName: inputtedFirstName,
        lastName: inputtedLastName
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
    ? <Paper elevation={3} className={classes.registerPageCard}>
      <form className={classes.form} noValidate onSubmit={handleLoginSubmit}>
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
    : <Paper elevation={3} className={classes.registerPageCard}>
      <form className={classes.form} noValidate onSubmit={handleUserSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="firstName"
          autoFocus
          inputRef={firstNameRef}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="lastName"
          label="Last Name"
          type="lastName"
          id="lastName"
          autoComplete="lastName"
          inputRef={lastNameRef}
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
      </form>
    </Paper>
  )
}

export default RegisterPage