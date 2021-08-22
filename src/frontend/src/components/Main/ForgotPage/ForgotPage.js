import React from 'react'
import styles from './styles'
import SharedButton from '../../../shared/Button/SharedButton'
import TextField from '@material-ui/core/TextField'
import {Button, Link} from '@material-ui/core'

function ForgotPage () {
  const classes = styles()

  return (
    <div className={classes.container}>
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
        <SharedButton title="Reset password" variant="outlined"/>
      </Link>
      <Link exact to='/login' className={classes.link}>
        <Button title='Return' className={classes.returnBtn}/>
      </Link>
    </div>
  )
}

export default ForgotPage