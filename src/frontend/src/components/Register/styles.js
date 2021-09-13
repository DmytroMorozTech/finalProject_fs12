import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  register: {
    width: '100vw',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerHeader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
    flexDirection: 'column',
    alignItems: 'center'
  },
  registerHeaderText: {
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h4.fontWeight
  }
}))