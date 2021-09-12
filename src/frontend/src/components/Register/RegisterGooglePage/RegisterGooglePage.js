import React from 'react'
import styles from './styles'
import SharedButton from '../../../shared/SharedButton/SharedButton'
import {TextField} from 'formik-material-ui'
import {Paper} from '@material-ui/core'
import http from '../../../services/httpService'
import {toast} from 'react-toastify'
import {useHistory} from 'react-router'
import {Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {activeUserSelector} from '../../../redux/User/userSelector'
import Image from '../../../shared/Image/Image'
import {signOutAction} from '../../../redux/User/userActions'

const RegisterGooglePage = () => {
  const classes = styles()
  const activeUser = useSelector(activeUserSelector)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = (data) => {
    const {password} = data

    http
      .post('api/update_password', {
        email: activeUser.email,
        password: password
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
    <Paper elevation={3} className={clsx(classes.registerPageCard, classes.googleSignUpPage)}>
      <div className={classes.avatarWrapper}>
        <Image
          imageUrl={activeUser.avatarPublicId}
          alt={`Avatar of ${activeUser.fullName}`}
          className={classes.avatar}
          type={'smallAvatar'}
        />
        <div className={classes.userDataWrapper}>
          <span className={classes.userName}>{activeUser.fullName}</span>
          <span className={classes.userName}>{activeUser.email}</span>
        </div>
        <Link to="/" className={classes.notYouLineLink} onClick={() => dispatch(signOutAction())}>Not you?</Link>
      </div>
      <Formik
        initialValues={{
          password: ''
        }}
        validationSchema={
          Yup.object().shape({
            password: Yup.string()
              .matches('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$', 'Password must be: minimum eight characters, at least one letter, one number and one special character!')
              .required('Password is required')
          })}
        onSubmit={(values, {resetForm}) => {
          handleSubmit(values)
          resetForm({password: ''})
        }}
      >
        {() => (
          <Form className={classes.form}>
            <Field component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password (8 or more characters)"
              type="password"
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
          </Form>
        )}
      </Formik>
      <div className={classes.signInLineWrapper}>
        <p>Already on LinkedIn?</p>
        <Link to="/" className={classes.signInLineLink} onClick={() => dispatch(signOutAction())}>Sign in</Link>
      </div>
    </Paper>
  )
}

export default RegisterGooglePage