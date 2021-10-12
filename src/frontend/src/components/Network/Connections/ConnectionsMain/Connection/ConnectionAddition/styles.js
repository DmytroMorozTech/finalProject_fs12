import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  menuItem: {
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)'
    }
  },

  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[700],
    cursor: 'pointer'
  },

  icon: {
    display: 'flex'
  },

  titles: {
    paddingLeft: theme.spacing(2)
  }
}))
