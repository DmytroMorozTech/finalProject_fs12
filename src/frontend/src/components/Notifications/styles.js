import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  notifications: {
    margin: '75px auto', // this style will change
    maxWidth: '40%',
    display: 'flex',
    flexDirection: 'column',
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white
  },

  notification: {
    display: 'flex',
    flexDirection: 'row'
  },

  userAvatar: {
    width: theme.avatar.large,
    borderRadius: '50%',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3)
  },

  content: {
    margin: theme.spacing(3),
    cursor: 'pointer'
  },

  userName: {
    fontWeight: theme.typography.h5.fontWeight,
    color: theme.palette.grey[700]
  },

  actionAndText: {
    color: theme.palette.grey[700]
  },

  notificationTimeAndMenu: {
    color: theme.palette.grey[500],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: theme.spacing(2)
  },

  notificationTime: {
    fontSize: theme.typography.h6.fontSize,
    marginRight: theme.spacing(2)
  }
}))
