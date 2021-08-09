import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  post: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing(2),
    border: theme.border.simple,
    borderRadius: theme.shape.medium,
    backgroundColor: theme.palette.common.white,
    paddingBottom: theme.spacing(1)
  },

  hiddenMenu: {
    display: 'flex',
    flexDirection: 'row-reverse',
    width: '98%'
  },

  postAuthor: {
    display: 'flex',
    flexDirection: 'row',
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    alignItems: 'center'
  },

  line: {
    width: '95%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: theme.palette.grey[300]
  },

  mediumAvatar: {
    width: theme.avatar.medium
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    cursor: 'pointer',
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1)
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
    flexDirection: 'row'
  },

  worldIcon: {
    fontSize: theme.typography.icons.extraSmall.fontSize,
    color: theme.palette.grey[600]
  },

  text: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)

  },

  picture: {
    maxWidth: '100%',
    height: 'auto'
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

  quantity: {
    paddingLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    marginLeft: theme.spacing(3)
  },

  quantityText: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: theme.palette.grey[500],
    '&:hover': {
      textDecoration: 'underline',
      color: theme.palette.primary.main
    }
  },

  liked: {
    color: theme.palette.primary.main
  },

  hiddenAddComment: {
    display: 'none'
  },

  showedAddComment: {
    display: 'flex',
    flexDirection: 'column',
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
    width: theme.avatar.small,
    marginTop: theme.spacing(1.5)
  },

  newComment: {
    width: '100%'
  },

  commentField: {
    border: theme.border.simple,
    borderRadius: theme.shape.large,
    padding: theme.spacing(2.5),
    margin: theme.spacing(1),
    width: 'calc(100% - 10px)'
  },

  hidden: {
    display: 'none'
  },

  showedButton: {
    display: 'flex',
    marginBottom: theme.spacing(2)
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
