import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  root: {
    maxWidth: 1200,
    display: 'flex',
    maxHeight: 'calc(100vh - 64px)'
  },
  paper: {
    marginRight: theme.spacing(2)
  },
  popper: {
    marginTop: theme.spacing(1),
    maxWidth: 800,
    zIndex: 10
  },
  menuBody: {
    borderRadius: theme.shape.medium,
    border: theme.border.simple,
    borderTopRightRadius: 0
  }
}))
