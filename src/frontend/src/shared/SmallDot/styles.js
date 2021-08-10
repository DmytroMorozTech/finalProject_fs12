import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  smallDot: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1),
    fontSize: theme.typography.icons.smallest.fontSize,
    color: theme.palette.grey[500]
  }
}))
