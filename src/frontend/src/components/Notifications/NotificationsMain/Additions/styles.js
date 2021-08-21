import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  itemWrapper: {
    display: 'flex'
  },
  icon: {
    color: theme.palette.grey[700]
  },
  itemTextWrapper: {
    marginLeft: theme.spacing(2),
    color: theme.palette.grey[700]
  },
  itemTextHeader: {
    lineHeight: theme.typography.additions.lineHeight
  },
  itemTextBody: {
    lineHeight: theme.typography.additions.lineHeight,
    fontSize: theme.typography.h6.fontSize
  }
}))