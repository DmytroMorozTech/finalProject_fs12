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
    textDecoration: 'none',
    cursor: 'pointer'
  },

  icon: {
    paddingTop: theme.spacing(1),
    fontSize: theme.typography.icons.medium.fontSize,
    display: 'flex'
  },

  title: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    color: theme.palette.grey[600],
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightRegular
  }
}))
