import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  notificationsLeft: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(2)
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

  settings: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[100],
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderRadius: theme.shape.down
  },

  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h5.fontSize,
    cursor: 'pointer'
  }
}))
