import { makeStyles } from '@material-ui/core/styles'
import ProfileBgMini from '../../../temporaryImages/ProfileBgMini.png'

export default makeStyles((theme) => ({
  root: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    marginBottom: theme.spacing(2)
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    borderRadius: theme.shape.up,
    backgroundImage: 'url(' + ProfileBgMini + ')',
    backgroundSize: '100% 33%',
    backgroundRepeat: 'no-repeat'
  },

  largeAvatar: {
    width: theme.avatar.large,
    border: '2px solid white',
    borderRadius: '50%',
    margin: '0 auto'
  },

  line: {
    width: '100%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  },

  name: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.h3.fontWeight,
    color: theme.palette.grey[700],
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: theme.palette.primary.main,
      textDecorationThickness: '2px'
    }
  },

  link: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  connection: {
    color: theme.palette.grey[700],
    padding: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
  },

  connectionLink: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: theme.typography.h6.fontSize
  },

  connectionText: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold
  },

  views: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.grey[700],
    padding: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
  },

  number: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h6.fontSize
  },

  items: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.grey[700],
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(2),
    '&:hover': {
      borderRadius: theme.shape.down,
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
  }
}))
