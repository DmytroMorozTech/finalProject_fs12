import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: 100,
    backgroundColor: 'white',
    borderBottom: '2px solid #e2dfdf',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },

  header_logo_search: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header_logo: {
    color: '#0a66c2',
    paddingTop: '3px',
    '& > .MuiSvgIcon-root': {
      fontSize: 45
    }
  },

  header_search: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 10,
    padding: '5px',
    borderRadius: 3,
    backgroundColor: '#dce6f1',
    '& > .MuiSvgIcon-root': {
      color: 'grey'
    },
    '& > input': {
      fontSize: 18,
      marginLeft: 5,
      border: 0,
      outlineWidth: 0,
      backgroundColor: 'transparent',
      '&::placeholder': {
        color: 'grey'
      }
    }
  }
}))