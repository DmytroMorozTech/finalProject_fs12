import {makeStyles} from '@material-ui/styles'

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
    alignItems: 'center',
    '@media screen and (max-width: 640px)': {
      width: '90vw',
      height: '50vh'
    }
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
    fontWeight: theme.typography.h4.fontWeight,
    textAlign: 'center',
    '@media screen and (max-width: 640px)': {
      fontSize: theme.typography.sh1.fontSize
    }
  }
}))
