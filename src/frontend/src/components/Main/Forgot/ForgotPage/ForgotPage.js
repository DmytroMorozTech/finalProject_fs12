import React from 'react'
import styles from './styles'
import TextField from '@material-ui/core/TextField'
import {Button, Link, Paper} from '@material-ui/core'
import LinkedinLogo from '../../../../shared/LinkedinLogo/LinkedinLogo'

function ForgotPage () {
  const classes = styles()

  return (
    <Paper elevation={3} className={classes.forgotPageCard}>
      <header className={classes.header}>
        <LinkedinLogo/>
      </header>
      <h2 className={classes.mainText}>Forgot your password?</h2>
      <p className={classes.subText}>Change password by doing two simple steps</p>
      <form className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email_phone"
          label="Email Address or Phone Number"
          name="email or phone number"
          autoComplete="email/phone number"
          autoFocus
        />
      </form>
      <Link exact to='/home' className={classes.link}>
        <p>Return</p>
      </Link>
      <Link exact to='/login' className={classes.link}>
        <Button title='Return to login page' className={classes.returnBtn}/>
      </Link>
    </Paper>
  )
}

export default ForgotPage