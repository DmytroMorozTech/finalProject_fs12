import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  newCommentInput: {
    width: '100%'
  },

  addComment: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
    width: '100%'
  },

  smallAvatar: {
    width: theme.avatar.extraSmall,
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

  showedValidateMessage: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing(1),
    alignItems: 'center',
    color: theme.palette.error.main,
    fontSize: theme.typography.icons.small.fontSize
  },

  showedButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },

  hidden: {
    display: 'none'
  },

  validateMessage: {
    margin: theme.spacing(1),
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    '& span': {
      color: theme.palette.error.main
    }
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
