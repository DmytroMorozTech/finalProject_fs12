import { makeStyles } from '@material-ui/core/styles'
import LoginCard from './loginCard/LoginCard'

const Style = makeStyles((theme) => ({
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
    alignItems: 'center',
    padding: '0 50px'
  }
}))

const Login = () => {
  const classes = Style()
  return (
    <div className={classes.login}>
      <div className={classes.loginCard}>
        <LoginCard />
      </div>
    </div>
  )
}

export default Login
