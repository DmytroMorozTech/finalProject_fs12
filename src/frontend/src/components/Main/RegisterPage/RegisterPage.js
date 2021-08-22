import React from 'react'
import styles from './styles'
import SharedButton from '../../../shared/Button/SharedButton'
import {GoogleLoginButton} from 'react-social-login-buttons'
import TextField from '@material-ui/core/TextField'
import { Link } from '@material-ui/core'

function RegisterPage () {
  const classes = styles()

  return (
    <div className={classes.container}>
      <p className={classes.emailTitle}>Email Address</p>
      <form className={classes.form}>
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
          <GoogleLoginButton onClick={() => alert('Hello')}/>
        </div>
      </div>
      <div className={classes.readyLinkedIn}>
        <p>Already have Linkedin account</p>
        <Link exact to='/login'>
          <SharedButton title='Sign In' variant='outlined'/>
        </Link>
      </div>
    </div>
  )
}

export default RegisterPage