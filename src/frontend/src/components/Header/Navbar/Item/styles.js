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
  },
  itemPrimary: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&:link, &:visited': {
      color: 'grey'
    },
    '&:hover': {
      color: 'black',
      fontWeight: 'bold'
    },
    '&:active': {
      color: 'black',
      fontWeight: 'bold'
    }
  },
  itemPrimaryActive: {
    color: 'black!important',
    borderBottom: '2px solid black'
  },
  itemPrimaryText: {
    textDecoration: 'none',
    '&:link, &:visited': {
      color: 'grey'
    },
    '&:hover': {
      color: 'black'
    },
    '&:active': {
      color: 'black'
    }
  }
}))
