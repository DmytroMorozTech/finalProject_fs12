import React from 'react'
import { Paper } from '@material-ui/core'
import styles from './Style'
import TextField from '@material-ui/core/TextField'
import { GoogleLoginButton } from 'react-social-login-buttons'
import LinkedinLogo from '../../../shared/LinkedinLogo/LinkedinLogo'
import SharedButton from '../../../shared/Button/SharedButton'

const LoginCard = () => {
  const classes = styles()

  return (
    <Paper elevation={3} className={classes.card}>
      <header className={classes.header}>
        <LinkedinLogo/>
      </header>

      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
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
          title="Sign In"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => alert('Hello')}
        />
      </form>

      <div className={classes.google}>
        <section>
          <div/>
          <p>OR</p>
          <div/>
        </section>
        <GoogleLoginButton className={classes.googleBtn} onClick={() => alert('Hello')}/>
      </div>
    </Paper>
  )
}

export default LoginCard
