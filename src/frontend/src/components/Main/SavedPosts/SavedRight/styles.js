import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  savedRightRoot: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    marginBottom: theme.spacing(3)
  },
  savedRightElements: {
    color: theme.palette.secondary.main,
    marginLeft: '15px'
  },
  savedRightText: {
    color: theme.palette.primary.main,
    marginLeft: '15px'
  }
}))
