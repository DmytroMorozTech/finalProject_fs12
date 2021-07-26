import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  notifications: {
    maxWidth: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #e0e0e0',
    borderRadius: '10px'
  },

  notification: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  userAvatar: {
    width: '65px',
    borderRadius: '50%',
    margin: '15px'
  },

  userName: {
    fontWeight: 600,
    color: '#616161'
  },

  actionAndText: {
    color: '#616161'
  },

  notificationTimeAndMenu: {
    color: 'grey',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  notificationTime: {
    fontSize: 12
  },

  menu: {
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    '& > .MuiSvgIcon-root': {
      margin: '8px'
    },
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)',
      borderRadius: '50%'
    }
  }
}))