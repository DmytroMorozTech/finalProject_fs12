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
    width: '98%',
    marginTop: theme.spacing(1)
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
    width: theme.avatar.small
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    cursor: 'pointer',
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1)
  },

  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
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

  hiddenAddComment: {
    display: 'none'
  },

  postImage: {
    width: '100%'
  }
}))
