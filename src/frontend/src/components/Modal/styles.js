import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    width: '500px',
    maxWidth: '1200px',
    maxHeight: '800px',
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}))
