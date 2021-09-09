import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
  },

  items: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: theme.typography.h5.fontSize,
    cursor: 'pointer'
  },

  icons: {
    display: 'flex',
    fontSize: theme.typography.icons.large.fontSize,
    color: theme.palette.grey[700]
  },

  titles: {
    paddingLeft: theme.spacing(2),
    color: theme.palette.grey[600]
  },

  number: {
    color: theme.palette.grey[600]
  }
}))
