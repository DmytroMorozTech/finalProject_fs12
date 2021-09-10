import LoginCard from './loginCard/LoginCard'
import {useSelector} from 'react-redux'
import {isLoadingUserSelector} from '../../redux/User/userSelector'
import Preloader from '../../shared/Preloader/Preloader'
import React from 'react'
import LinkedinLogo from '../../shared/LinkedinLogo/LinkedinLogo'
import styles from './styles'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'

const Login = () => {
  const isLoadingUser = useSelector(isLoadingUserSelector)
  const classes = styles()
  return isLoadingUser ? <Preloader/> : (
    <div className={classes.login}>
      <div className={classes.signInLogo}>
        <LinkedinLogo/>
      </div>
      <div className={classes.loginCard}>
        <LoginCard/>
      </div>
      <div className={classes.signUpLineWrapper}>
        <p>New to LinkedIn?</p>
        <Button component={Link} exact to="/signup" className={classes.signUpLineLink} color="primary">Join
            now</Button>
      </div>
    </div>
  )
}

export default Login
