import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  dots: {
    cursor: 'pointer',
    width: theme.spacing(8),
    height: theme.spacing(8),
    color: theme.palette.grey[500],
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)',
      borderRadius: '50%'
    }
  },

  icon: {
    margin: theme.spacing(2)
  }
}))
