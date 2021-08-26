import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  paperRoot: {
    width: '100%',
    minWidth: '300px',
    maxWidth: '800px',
    maxHeight: '800px',
    [theme.breakpoints.down('sm')]: {
      margin: 0
    }
  },
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}))
