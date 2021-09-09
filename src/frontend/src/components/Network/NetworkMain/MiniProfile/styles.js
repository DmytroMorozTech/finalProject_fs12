import { makeStyles } from '@material-ui/core/styles'
import ProfileBgMini from '../../../../temporaryImages/ProfileBgMini.png'

export default makeStyles((theme) => ({

  miniProfile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: theme.shape.medium,
    width: '180px',
    height: '280px',
    border: theme.border.simple,
    margin: theme.spacing(1),
    '&:hover': {
      boxShadow: theme.shadows[4],
      transitionDuration: '0.5s'
    }
  },

  '@media screen and (max-width: 445px)': {
    smallScreen: {
      width: '150px'
    }
  },

  '@media screen and (max-width: 385px)': {
    smallScreen: {
      width: '118px'
    }
  },

  removed: {
    display: 'none'
  },

  header: {
    backgroundImage: 'url(' + ProfileBgMini + ')',
    backgroundSize: '100% 37%',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(2),
    paddingBottom: 0,
    alignItems: 'center',
    borderRadius: theme.shape.up,
    position: 'relative'
  },

  cross: {
    display: 'flex',
    width: theme.spacing(6),
    fontSize: theme.typography.icons.medium.fontSize,
    color: theme.palette.common.white,
    backgroundColor: 'rgba(0,0,0,.5)',
    padding: theme.spacing(1),
    borderRadius: '50%',
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    cursor: 'pointer'
  },

  link: {
    textDecoration: 'none'
  },

  avatar: {
    width: theme.avatar.extraLarge,
    border: '2px solid white',
    borderRadius: '50%',
    margin: '0 auto'
  },

  avatarWrapper: {
    display: 'flex',
    alignItems: 'center'
  },

  name: {
    color: theme.palette.grey[700],
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationThickness: '2px'
    }
  },

  connectionGroup: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
    paddingTop: 0,
    width: '100%'
  },

  connection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  },

  icon: {
    marginLeft: -theme.spacing(1)
  },

  connectionText: {
    paddingLeft: theme.spacing(1)
  }
}))
