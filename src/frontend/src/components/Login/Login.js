import { makeStyles } from '@material-ui/core/styles'
import LoginCard from './loginCard/LoginCard'

const styles = makeStyles(() => ({
  login: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
