import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({

  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '40px'
    }
  },
  additionalList: {
    width: '20%'
  },
  logoutLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey'
  }
}))
