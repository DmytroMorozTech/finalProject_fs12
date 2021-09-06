import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  item: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  },

  title: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold
  },

  subtitle: {
    color: theme.palette.grey[600],
    fontSize: theme.typography.h6.fontSize
  }
}))