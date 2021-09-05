import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  invitation: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(112, 181, 249, 0.2)',
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4)
  },

  flex: {
    display: 'flex'
  },

  userInfo: {
    margin: theme.spacing(2)
  },

  userAvatar: {
    width: theme.avatar.large,
    borderRadius: '50%',
    display: 'flex'
    // alignSelf: 'flex-start'
  },

  connection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    color: theme.palette.grey[700],
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
  },

  buttons: {
    display: 'flex',
    alignItems: 'center'
  },

  buttonIgnore: {
    margin: theme.spacing(1)
  }
}))
