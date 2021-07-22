import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({

  block: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'space-between',
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
  }
}))