import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({

  navbar: {
    display: 'flex',
    alignItems: 'center',
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '40px'
    }
  },
  itemPrimary: {
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
