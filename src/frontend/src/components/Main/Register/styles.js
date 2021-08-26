import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  register: {
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
  registerPage: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerHeader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 80,
    flexDirection: 'column',
    alignItems: 'center'
  },
  registerHeaderText: {
    fontSize: theme.typography.h1
  }
}))