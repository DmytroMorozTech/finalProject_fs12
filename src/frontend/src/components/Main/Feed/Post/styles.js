import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  post: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '10px',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    marginBottom: '50px'
  },

  postAuthor: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px',
    paddingLeft: '10px'
  },

  hiddenMenu: {
    marginLeft: '90%',
    margin: '2px 0'
  },

  line: {
    width: '95%',
    height: '0.5px',
    border: '0',
    margin: '0 10px',
    backgroundColor: '#e0e0e0'
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    cursor: 'pointer'
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
      fontSize: 12,
      marginLeft: '5px'
    }
  },

  name: {
    'fontWeight': 600,
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
    '& > .MuiSvgIcon-root': {
      fontSize: 3
    }
  },

  quantityText: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
    margin: '0 5px',
    color: '#9e9e9e',
    '&:hover': {
      textDecoration: 'underline'
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

  hiddenButton: {
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
    marginBottom: '-3px',
    cursor: 'pointer'
  },

  commentText: {
    marginTop: '10px'
  },

  commentLike: {
    display: 'flex',
    marginLeft: '15px',
    fontSize: '12px',
    padding: '0 2px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: '5px'
    }
  },

  loadMoreComments: {
    margin: '5px 0',
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
