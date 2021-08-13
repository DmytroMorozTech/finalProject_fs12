import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  savedLeftRoot: {
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    marginBottom: theme.spacing(3)
  },
  savedLeftElements: {
    color: theme.palette.secondary.main,
    marginTop: '15px',
    paddingLeft: '15px'
  },
  savedLeftElementsText: {
    color: theme.palette.primary.main,
    marginTop: '15px',
    paddingLeft: '15px'
  }
}))