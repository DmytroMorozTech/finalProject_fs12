import { makeStyles } from '@material-ui/core/styles'

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
    position: 'relative',
    '&:hover': {
      boxShadow: theme.shadows[4],
      transitionDuration: '0.5s'
    }
  },

  '@media screen and (max-width: 445px)': {
    smallScreen: {
      width: '150px',
      height: '320px'
    }
  },

  '@media screen and (max-width: 385px)': {
    smallScreen: {
      height: '280px',
      width: '118px'
    },

    hidden: {
      display: 'none'
    }
  },

  header: {
    padding: theme.spacing(2),
    paddingBottom: 0,
    alignItems: 'center',
    borderRadius: theme.shape.up,
    position: 'relative'
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '20%',
    backgroundRepeat: 'no-repeat',
    borderRadius: theme.shape.up
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
    color: theme.palette.grey[600],
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: theme.palette.grey[600]
    }
  },

  icon: {
    marginLeft: -theme.spacing(1)
  },

  connectionText: {
    paddingLeft: theme.spacing(1)
  }
}))
