import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
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

  name: {
    'fontWeight': 600,
    marginBottom: '-3px',
    alignSelf: 'self-start',
    '&:hover': {
      color: '#0a66c2',
      textDecoration: 'underline'
    }
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
