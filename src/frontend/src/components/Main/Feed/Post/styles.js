import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  post: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
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
    borderBottom: '1px solid #e0e0e0',
    width: '100%',
    paddingBottom: '5px',
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
  }
}))
