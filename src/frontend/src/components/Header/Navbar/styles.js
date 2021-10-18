import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  navbar: {
    display: 'flex',
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    }
  },
  additionalList: {
    width: '20%'
  },
  logoutLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.grey[500]
  }
}))
