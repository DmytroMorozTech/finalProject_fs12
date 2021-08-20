import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  networkLeft: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(4),
    color: theme.palette.grey[700],
    fontSize: theme.typography.h5.fontSize
  },

  title: {
    paddingLeft: theme.spacing(4)
  },

  items: {
    marginTop: theme.spacing(1)
  }
}))
