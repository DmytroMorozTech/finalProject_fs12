import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  container: {
    '& div': {
      margin: 0
    }
  },

  menuItem: {
    minHeight: theme.spacing(7),
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)'
    }
  }
}))
