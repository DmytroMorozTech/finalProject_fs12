import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  invitation: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    borderTop: theme.border.simple
  },

  newInvitation: {
    backgroundColor: 'rgba(112, 181, 249, 0.2)'
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
  },

  connection: {
    display: 'flex',
    alignItems: 'center',
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

  buttonSquare: {
    margin: theme.spacing(1)
  },

  '@media screen and (max-width: 445px)': {
    smallScreenConnection: {
      display: 'none'
    },

    smallScreenButtons: {
      flexDirection: 'column'
    }
  }
}))
