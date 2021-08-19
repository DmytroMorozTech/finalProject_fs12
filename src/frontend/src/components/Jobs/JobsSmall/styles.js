import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },

  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[700],
    cursor: 'pointer'
  },

  icon: {
    fontSize: theme.typography.icons.medium.fontSize,
    display: 'flex'
  },

  title: {
    marginLeft: theme.spacing(2),
    color: theme.palette.grey[600]
  },

  button: {
    color: theme.palette.grey[600],
    '&:hover': {
      transitionDuration: '0.5s',
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
  }
}))
