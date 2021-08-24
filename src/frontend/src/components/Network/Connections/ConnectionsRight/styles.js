import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  connectionsRight: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}))
