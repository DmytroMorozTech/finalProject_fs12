import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  icon: {
    cursor: 'pointer',
    color: theme.palette.grey[500],
    width: theme.spacing(6),
    height: theme.spacing(6),
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)',
      borderRadius: '50%'
    }
  }
}))
