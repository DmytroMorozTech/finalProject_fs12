import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  notification: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    border: theme.border.simple,
    borderRadius: theme.shape.small,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(1),
    overflow: 'hidden'
  },

  notificationImg: {
    width: theme.avatar.small,
    marginLeft: theme.spacing(3),
    borderRadius: '50%'
  },

  noNotificationsImg: {
    width: theme.avatar.large,
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },

  content: {
    margin: theme.spacing(3),
    cursor: 'pointer',
    width: '100%'
  },

  headerText: {
    fontWeight: theme.typography.h5.fontWeight,
    color: theme.palette.grey[700]
  },

  link: {
    textDecoration: 'none'
  },

  mainText: {
    display: 'block',
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
  },

  wasNotViewed: {
    backgroundColor: '#e8f1f7'
  }
}))
