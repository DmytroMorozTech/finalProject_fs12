import { makeStyles } from '@material-ui/core/styles'
import LoginCard from './loginCard/LoginCard'
import { useSelector } from 'react-redux'
import { isLoadingUserSelector } from '../../redux/User/userSelector'
import Preloader from '../../shared/Preloader/Preloader'
import React from 'react'

const styles = makeStyles((theme) => ({
  login: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 150
  },
  loginCard: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const Login = () => {
  const isLoadingUser = useSelector(isLoadingUserSelector)
  const classes = styles()
  return isLoadingUser ? <Preloader/> : (
    <div className={classes.login}>
      <div className={classes.loginCard}>
        <LoginCard />
      </div>
    </div>
  )
}

export default Login
