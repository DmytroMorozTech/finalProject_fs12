import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  login: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 150
  },

  loginCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  signUpLineWrapper: {
    zIndex: 150,
    display: 'flex',
    justifyContent: 'center',
    fontSize: theme.typography.sh3.fontSize
  },

  signUpLineLink: {
    fontSize: theme.typography.sh3.fontSize,
    textDecoration: 'none',
    '& :hover': {
      textDecoration: 'underline'
    }
  },

  signInLogo: {
    position: 'absolute',
    top: '2rem',
    left: '3rem',
    zIndex: 150
  }
}))
