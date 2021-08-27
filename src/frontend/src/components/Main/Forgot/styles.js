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
    paddingLeft: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  link: {
    textDecoration: 'none'
  }
}))