import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  post: {
    padding: '0, 50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '10px',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    borderRadius: '10px'
  },

  picture: {
    maxWidth: '100%',
    height: 'auto'
  },

  block: {
    display: 'flex',
    color: 'grey'
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.35s ease',
    padding: '10px',
    borderRadius: '5px',

    '& > .MuiSvgIcon-root': {
      fontSize: 30
    },
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)'
    },
    '& > span': {
      fontSize: 15,
      fontWeight: 500
    }
  },

  liked: {
    color: '#0a66c2'
  },

  quantity: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    width: '100%',
    '& > .MuiSvgIcon-root': {
      fontSize: 3
    },
    '& > span': {
      display: 'flex',
      alignItems: 'center',
      margin: '0 5px',
      fontSize: 11,
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },
  avatar: {
    paddingLeft: '10px'
  },
  postAuthor: {
    display: 'flex',
    flexDirection: 'row'
  },
  hiddenMenu: {
    color: 'gray',
    marginLeft: '90%',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.10)',
      borderRadius: '50%'
    }
  },
  line: {
    width: '95%',
    height: '0.5px',
    border: '0',
    backgroundColor: '#e0e0e0'

  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    cursor: 'pointer',
    fontSize: 12,
    fontWeight: 500
  },
  position: {
    color: 'gray',
    fontSize: 10
  },
  postTime: {
    display: 'flex',
    flexDirection: 'row',
    color: 'gray',
    fontSize: 10
  },
  worldIcon: {
    color: 'gray',
    '& > .MuiSvgIcon-root': {
      fontSize: 12,
      marginLeft: '5px'
    }
  }
}))
