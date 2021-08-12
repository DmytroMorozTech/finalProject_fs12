import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  postButton: {
    width: '100%'
  },

  block: {
    display: 'flex',
    color: theme.palette.grey[600],
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1)
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.35s ease',
    padding: theme.spacing(2),
    borderRadius: theme.shape.small,
    fontSize: theme.typography.icons.large.fontSize,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)'
    },
    '& > span': {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
      paddingLeft: theme.spacing(1)
    }
  },

  liked: {
    color: theme.palette.primary.main
  },

  showedAddComment: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },

  hidden: {
    display: 'none'
  }
}))
