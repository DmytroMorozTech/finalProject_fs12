import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    backgroundColor: theme.palette.common.white,
    borderBottom: theme.border.simple,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: theme.spacing(10),
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
  },

  headerSearch: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5),
    paddingLeft: theme.spacing(3),
    borderRadius: theme.shape.extraSmall,
    backgroundColor: 'rgba(220,230,241,0.5)',
    fontSize: theme.typography.icons.medium.fontSize,
    color: theme.palette.grey[800],
    '& > input': {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
      marginLeft: theme.spacing(1),
      border: 0,
      backgroundColor: 'transparent',
      '&::placeholder': {
        color: theme.palette.grey[600],
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight
      }
    }
  }
}))