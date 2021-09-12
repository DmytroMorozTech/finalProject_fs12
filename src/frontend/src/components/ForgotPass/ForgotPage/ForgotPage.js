import React, {useRef} from 'react'
import styles from './styles'
import TextField from '@material-ui/core/TextField'
import {Paper} from '@material-ui/core'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import http from '../../../services/httpService'
import {toast} from 'react-toastify'
import {useHistory} from 'react-router'
import {Link} from 'react-router-dom'
import {getActiveUserAction} from '../../../redux/User/userActions'

function ForgotPage () {
  const classes = styles()
  const history = useHistory()
  const emailRef = useRef('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    let inputtedEmail = emailRef.current.value

    http
      .post('api/auth', {
        email: inputtedEmail
      })
      .then(res => {
        if (res.status === 200) {
          let token = res.data.token
        }
      })
      .catch(err => {
        const errorMsg = err.response.data.message
        toast.error(errorMsg)
      })
  }
  return (
    <Paper elevation={3} className={classes.forgotPageCard}>
      <div className={classes.mainTextContainer}>
        <h2 className={classes.mainText}>Forgot password?</h2>
        <p className={classes.subText}>Reset password in two quick steps</p>
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
          inputRef={emailRef}
        />
        <SharedButton
          className={classes.resetButton}
          type="submit"
          size="large"
          title="Reset password"
          fullWidth
          variant="contained"
          color="primary"
        />
      </form>
      <Link to="/" className={classes.signInLineLink}>Back</Link>
    </Paper>
  )
}

export default ForgotPage