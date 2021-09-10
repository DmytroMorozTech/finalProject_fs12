import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: 100,
    backgroundColor: theme.palette.common.white,
    borderBottom: theme.border.simple,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: theme.spacing(11),
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },

  headerLogoSearch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerLogo: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.icons.extraLarge.fontSize,
    paddingTop: theme.spacing(3)
  }
}))
