import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  notificationsLeft: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(2),
    width: '225px'
  },

  notifications: {
    padding: theme.spacing(2)
  },

  title: {
    margin: theme.spacing(2),
    color: theme.palette.grey[900]
  },

  description: {
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.grey[500],
    lineHeight: theme.typography.h3.lineHeight,
    marginBottom: theme.spacing(2)
  },

  line: {
    height: '1px',
    border: '0',
    width: '100%',
    margin: 0,
    backgroundColor: theme.palette.grey[300]
  },

  read: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(2),
    borderRadius: theme.shape.down
  }
}))
