import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  smallNotification: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },

  item: {
    display: 'flex',
    alignItems: 'center'
  },

  block: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },

  icon: {
    color: theme.palette.grey[600],
    fontSize: theme.typography.icons.medium.fontSize
  },

  title: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightLight,
    color: theme.palette.grey[600],
    paddingLeft: theme.spacing(2)
  },

  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h5.fontSize,
    cursor: 'pointer'
  }
}))
