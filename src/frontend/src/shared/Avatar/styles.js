import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  avatar: {
    color: theme.palette.grey[700],
    fontSize: theme.typography.icons.large.fontSize,
    cursor: 'pointer'
  },
  userAvatar: {
    width: '100%',
    borderRadius: '50%'
  }
}))