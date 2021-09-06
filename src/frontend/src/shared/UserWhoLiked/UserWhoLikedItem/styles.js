import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  userWhoLiked: {
    padding: theme.spacing(2)
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'row'
  },

  userAvatar: {
    position: 'relative'
  },

  avatar: {
    display: 'flex',
    width: theme.avatar.small,
    borderRadius: '50%'
  },

  link: {
    display: 'flex',
    textDecoration: 'none'
  },

  iconStatus: {
    position: 'absolute',
    left: '70%',
    top: '65%',
    border: '2px solid white',
    borderWidth: '2px',
    borderRadius: '50%'
  },

  buttonGroup: {
    paddingLeft: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  lineItem: {
    marginLeft: theme.spacing(12),
    width: 'calc(100% - 60px)',
    height: '0.5px',
    border: '0',
    margin: '0',
    backgroundColor: theme.palette.grey[300]
  }
}))
