import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    border: theme.border.simple,
    backgroundColor: theme.palette.common.white,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    boxShadow: theme.shadows[4],
    '& > div': {
      display: 'flex'
    }
  },

  menuItems: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  headerItem: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.palette.grey[700],
    borderBottom: '4px solid transparent'
  },

  active: {
    color: theme.palette.success.main,
    borderBottom: theme.border.success
  },

  refreshButton: {
    display: 'flex',
    alignItems: 'center'
  }
}))
