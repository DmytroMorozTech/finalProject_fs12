import { makeStyles } from '@material-ui/core/styles'
import theme from '../../Theme'

export default makeStyles(() => ({

  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}))