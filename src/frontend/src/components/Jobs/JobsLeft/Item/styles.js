import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: theme.spacing(4),
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[700],
    cursor: 'pointer'
  },

  icons: {
    fontSize: theme.typography.icons.medium.fontSize,
    display: 'flex'
  },

  titles: {
    marginLeft: theme.spacing(2)
  }
}))
