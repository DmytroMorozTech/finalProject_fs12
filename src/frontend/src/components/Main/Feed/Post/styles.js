import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  post: {
    display: 'flex',
    flexDirection: 'column',
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
    width: '90%',
    height: '0.5px',
    border: '0',
    margin: '0 5%',
    backgroundColor: '#e0e0e0'
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'column',
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
  }
}))
