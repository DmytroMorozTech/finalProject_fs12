import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  notifications: {
    display: 'flex',
    flexDirection: 'column',
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white
  }
}))
