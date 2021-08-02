import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  post: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '10px',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    marginBottom: '15px'
  },

  postAuthor: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px',
    paddingLeft: '10px',
    alignItems: 'center'
  },

  hiddenMenu: {
    marginLeft: '93%',
    margin: '2px 0'
  },

  line: {
    width: '95%',
    height: '0.5px',
    border: '0',
    margin: '0 auto',
    backgroundColor: '#e0e0e0'
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    cursor: 'pointer',
    marginLeft: '10px'
  },

  position: {
    color: 'grey'
  },

  time: {
    display: 'flex',
    flexDirection: 'row',
    color: 'grey',
    fontSize: '12px'
  },

  worldIcon: {
    color: 'grey',
    '& > .MuiSvgIcon-root': {
      fontSize: 14,
      fontWeight: 600
    }
  },

  name: {
    'fontWeight': 600,
    marginBottom: '-3px',
    alignSelf: 'self-start',
    '&:hover': {
      color: '#0a66c2',
      textDecoration: 'underline'
    }
  },

  text: {
    paddingLeft: '10px'
  },

  picture: {
    maxWidth: '100%',
    height: 'auto'
  },

  block: {
    display: 'flex',
    color: 'grey',
    marginLeft: '10px',
    marginTop: '4px'
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.35s ease',
    paddingLeft: '15px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingRight: '15px',
    borderRadius: '5px',
    '& > .MuiSvgIcon-root': {
      fontSize: 30
    },
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)'
    },
    '& > span': {
      fontSize: 15,
      fontWeight: 500,
      paddingLeft: '5px'
    }
  },

  quantity: {
    paddingLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    marginLeft: '15px',
    '& > .MuiSvgIcon-root': {
      fontSize: 3
    }
  },

  quantityText: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
    color: '#9e9e9e',
    '&:hover': {
      textDecoration: 'underline',
      color: '#0a66c2'
    }
  },

  liked: {
    color: '#0a66c2'
  },

  hiddenAddComment: {
    display: 'none'
  },

  showedAddComment: {
    display: 'flex',
    width: '100%'
  },

  addComment: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: '20px',
    paddingRight: '10px',
    width: '100%'
  },

  avatar: {
    paddingTop: '5px',
    paddingRight: '10px'
  },

  commentField: {
    border: '1px solid #e0e0e0',
    borderRadius: '35px',
    padding: '14px',
    margin: '8px 0px'
  },

  hidden: {
    display: 'none'
  },

  showedButton: {
    display: 'flex',
    marginLeft: '80px',
    marginBottom: '10px'
  },

  comments: {
    margin: '5px',
    color: 'grey'
  },

  comment: {
    display: 'flex',
    flexDirection: 'row'
  },

  commentAvatar: {
    width: '47px',
    borderRadius: '50%',
    marginLeft: '18px'
  },

  commentBackground: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: '0 10px 10px 10px',
    padding: '8px 12px',
    marginLeft: '5px',
    marginRight: '10px'
  },

  commentHeader: {
    display: 'flex',
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

  dots: {
    cursor: 'pointer',
    marginLeft: '2px',
    '& > .MuiSvgIcon-root': {
      fontSize: 18
    }
  },

  commentUserInfo: {
    fontSize: '12px',
    cursor: 'pointer'
  },

  commentText: {
    marginTop: '10px'
  },

  commentLikes: {
    display: 'flex',

    alignItems: 'center',
    marginTop: '3px',
    marginLeft: '15px',
    '& > span': {
      fontSize: '12px',
      cursor: 'pointer'
    }
  },

  commentLike: {
    padding: '0 5px',
    marginRight: '-2px',
    fontWeight: '600'
  },

  commentNotLiked: {
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: '5px'
    }
  },

  commentLiked: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: '5px',
    color: '#0a66c2'
  },

  quantityOfCommentsLike: {
    display: 'flex',
    cursor: 'pointer',
    marginLeft: '3px',
    '&:hover': {
      color: '#0a66c2'
    }
  },

  hiddenQuantityOfCommentsLike: {
    opacity: '0'
  },

  loadMoreComments: {
    margin: '15px 0 8px 15px',
    fontWeight: 600,
    fontSize: '14px',
    '& > span': {
      padding: '5px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: '5px'
      }
    }
  }
}))
