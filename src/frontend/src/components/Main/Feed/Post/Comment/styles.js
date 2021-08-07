import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  comment: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: theme.spacing(3)
  },

  commentAvatar: {
    width: theme.avatar.small,
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1)
  },

  commentWrapper: {
    width: 'calc(100% - 75px)'
  },

  commentBackground: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: theme.border.comment,
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    width: '100%'
  },

  commentHeader: {
    justifyContent: 'space-between'
  },

  commentRow: {
    display: 'flex',
    flexDirection: 'row'
  },

  commentColumn: {
    display: 'flex',
    flexDirection: 'column'
  },

  name: {
    alignSelf: 'self-start',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline'
    }
  },

  time: {
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.grey[500],
    fontSize: theme.typography.h6.fontSize
  },

  dots: {
    cursor: 'pointer',
    marginLeft: theme.spacing(0.5),
    fontSize: theme.typography.icons.medium.fontSize
  },

  commentUserInfo: {
    fontSize: theme.typography.h6.fontSize,
    cursor: 'pointer'
  },

  commentText: {
    marginTop: theme.spacing(2)
  },

  commentLikes: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(3),
    '& > span': {
      fontSize: theme.typography.h6.fontSize,
      cursor: 'pointer'
    }
  },

  commentLike: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    fontWeight: theme.typography.h6.fontWeight
  },

  commentNotLiked: {
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: theme.shape.small
    }
  },

  commentLiked: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: theme.shape.small,
    color: theme.palette.primary.main
  },

  quantityOfCommentsLike: {
    display: 'flex',
    cursor: 'pointer',
    marginLeft: theme.spacing(0.5),
    '&:hover': {
      color: theme.palette.primary.main
    }
  },

  hiddenQuantityOfCommentsLike: {
    opacity: '0'
  }
}))
