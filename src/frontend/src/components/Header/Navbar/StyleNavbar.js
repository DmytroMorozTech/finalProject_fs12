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
  }
}))