import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  smallDot: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: theme.typography.icons.smallest.fontSize,
    color: theme.palette.grey[500]
  }
}))
