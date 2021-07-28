import React from 'react'
import { Paper } from '@material-ui/core'
import Logo from '../../../temporaryImages/text_logo.png'
import Style from './Style'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { GoogleLoginButton } from 'react-social-login-buttons'

const LoginCard = () => {
  const classes = Style()

  return (
    <Paper elevation={3} className={classes.card}>
      <header className={classes.header}>
        <img src={Logo} alt='logo' />
      </header>

      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={() => alert('Hello')}
        >    Sign In
        </Button>
      </form>

      <div className={classes.google}>
        <section>
          <div/>
          <p>OR</p>
          <div/>
        </section>
        <GoogleLoginButton className={classes.googleBtn} onClick={() => alert('Hello')} />
      </div>
    </Paper>
  )
}

export default LoginCard
