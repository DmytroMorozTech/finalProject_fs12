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
    marginRight: theme.spacing(25),
    '& > input': {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
      marginLeft: theme.spacing(1),
      border: 0,
      backgroundColor: 'transparent',
      width: theme.spacing(50),
      '&::placeholder': {
        color: theme.palette.grey[600],
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight
      }
    }
  },

  headerButtonSearch: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(1.5),
    paddingTop: theme.spacing(2),
    transition: 'all 0.4s ease',
    fontSize: theme.typography.icons.large.fontSize,
    color: theme.palette.grey[700],
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.common.black
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing(16),
    height: theme.spacing(3),
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.header.fontWeight
  },
  icon: {
    width: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.typography.icons.large.fontSize
  }
}))
