import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'grey',
    cursor: 'pointer',
    borderBottom: '2px solid white',
    transition: 'all 0.35s ease',
    margin: '5px',
    '& > .MuiSvgIcon-root': {
      fontSize: 30
    },
    '&:hover': {
      color: 'black'
    },
    '&:active': {
      borderBottom: '2px solid black'
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > span': {
      fontSize: 12,
      fontWeight: 400,
      paddingBottom: '3px'
    }
  }
}))