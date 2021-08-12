import { makeStyles } from '@material-ui/core/styles'
import LoginCard from './loginCard/LoginCard'

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
  const classes = styles()
  return (
    <div className={classes.login}>
      <div className={classes.loginCard}>
        <LoginCard />
      </div>
    </div>
  )
}

export default Login
