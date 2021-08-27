import React from 'react'
import styles from './styles'
import SharedButton from '../../../../shared/Button/SharedButton'
import {GoogleLoginButton} from 'react-social-login-buttons'
import TextField from '@material-ui/core/TextField'
import { Link, Paper } from '@material-ui/core'

function RegisterPage () {
  const classes = styles()

  return (
    <Paper elevation={3} className={classes.registerPageCard}>
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
        <h4>Already have Linkedin account</h4>
        <Link exact to='/login' className={classes.link}>
          <SharedButton title='Return to login page'/>
        </Link>
      </div>
    </Paper>
  )
}

export default RegisterPage