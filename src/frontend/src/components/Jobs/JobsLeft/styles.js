import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  container: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  }
}))
