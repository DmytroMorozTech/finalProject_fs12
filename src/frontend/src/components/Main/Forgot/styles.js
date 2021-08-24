import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({
  forgot: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 150,
    flexDirection: 'column'
  },
  forgotPage: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: theme.palette.background.paper,
    width: '100vw',
    paddingLeft: '30px'
  },
  link: {
    textDecoration: 'none'
  },
  linkBtn: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column'
  },
  headerLinkSignIn: {
    margin: 'auto',
    padding: 'auto'

  }
}))