import React from 'react'
import styles from './styles'
import TextField from '@material-ui/core/TextField'
import {Link, Paper} from '@material-ui/core'
import SharedButton from '../../../../shared/Button/SharedButton'

function ForgotPage () {
  const classes = styles()

  return (
    <Paper elevation={3} className={classes.forgotPageCard}>
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
        <SharedButton title='Return to home page'/>
      </Link>
      <Link exact to='/login' className={classes.link}>
        <SharedButton title='Return to login page'/>
      </Link>
    </Paper>
  )
}

export default ForgotPage