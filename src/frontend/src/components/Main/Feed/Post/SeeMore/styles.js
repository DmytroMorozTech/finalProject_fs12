import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  seeMore: {
    color: theme.palette.grey[500],
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline'
    }
  },

  none: {
    display: 'none'
  }
}))
