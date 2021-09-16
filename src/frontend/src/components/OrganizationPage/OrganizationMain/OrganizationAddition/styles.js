import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.palette.grey[700],
    // zIndex: '10',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  },

  icon: {
    fontSize: theme.typography.icons.medium.fontSize,
    marginRight: theme.spacing(2),
    display: 'flex'
  },

  title: {
    display: 'flex',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold
  }
}))
