import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  item: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
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