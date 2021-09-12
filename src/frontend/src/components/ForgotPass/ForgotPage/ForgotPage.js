import React from 'react'
import styles from './styles'
import TextField from '@material-ui/core/TextField'
import {Paper} from '@material-ui/core'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import * as Yup from 'yup'
import {Formik, Form} from 'formik'
import http from '../../../services/httpService'
import {toast} from 'react-toastify'
import {useHistory} from 'react-router'
import {Link} from 'react-router-dom'

function ForgotPage () {
  const classes = styles()
  const history = useHistory()

  const handleSubmit = (data) => {
    const {email} = data

    http
      .post('api/update_password', {
        email: email

      })
      .then(res => {
        if (res.status === 200) {
          toast.info('You have signed up successful! Now you can sign in with your email and password! ')
          history.push('/home')
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
      <Formik
        initialValues={{
          email: ''
        }}
        validationSchema={
          Yup.object().shape({
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required')
          })}
        onSubmit={(values, {resetForm}) => {
          handleSubmit(values)
          resetForm({email: ''})
        }}
      >
        {() => (
          <Form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email_phone"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </Form>
        )}
      </Formik>
      <div className={classes.cardBtn}>
        <SharedButton
          className={classes.resetButton}
          type="submit"
          size="large"
          title="Reset password"
          fullWidth
          variant="contained"
          color="primary"
        />
        <Link to="/" className={classes.signInLineLink}>Back</Link>
      </div>
    </Paper>
  )
}

export default ForgotPage