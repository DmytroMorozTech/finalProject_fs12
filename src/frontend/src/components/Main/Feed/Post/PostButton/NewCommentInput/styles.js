import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  addComment: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
    width: '100%'
  },

  smallAvatar: {
    width: theme.avatar.small,
    marginTop: theme.spacing(1.5),
    flexShrink: 0
  },

  newComment: {
    width: '100%'
  },

  commentField: {
    border: theme.border.simple,
    borderRadius: theme.shape.large,
    padding: theme.spacing(2.5),
    margin: theme.spacing(1),
    width: 'calc(100% - 10px)',
    flexShrink: 1
  },

  showedButton: {
    display: 'flex',
    marginBottom: theme.spacing(2)
  },

  hidden: {
    display: 'none'
  },

  comments: {
    boxSizing: 'border-box',
    padding: theme.spacing(1),
    width: '100%',
    color: theme.palette.grey[500]
  },

  loadMoreComments: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    fontWeight: theme.typography.h5.fontWeight,
    fontSize: theme.typography.h5.fontSize,
    cursor: 'pointer',
    '& > span': {
      padding: theme.spacing(1),
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: theme.shape.small
      }
    }
  }
}))
