import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  eye: {
    display: 'flex',
    justifyContent: 'center',
    width: theme.spacing(5)
  },

  eyes: {
    color: theme.palette.grey[500],
    fontSize: theme.typography.icons.medium.fontSize,
    cursor: 'pointer'
  },

  hidden: {
    display: 'none'
  }
}))
