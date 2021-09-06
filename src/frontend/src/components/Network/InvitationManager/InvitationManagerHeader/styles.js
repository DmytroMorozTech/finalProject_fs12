import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  invitationManagerHeader: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(4)
  },

  title: {
    fontWeight: theme.typography.fontWeightRegular
  },

  headerItems: {
    display: 'flex',
    marginTop: theme.spacing(2)
  },

  headerItem: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(6),
    paddingBottom: theme.spacing(1),
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.palette.grey[700]
  },

  active: {
    color: theme.palette.success.main,
    borderBottom: theme.border.success
  }
}))
