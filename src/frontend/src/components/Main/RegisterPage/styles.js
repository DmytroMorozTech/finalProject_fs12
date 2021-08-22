import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '90px'
  },
  form: {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  link: {
    backgroundColor: theme.palette.background.default
  },
  google: {
    width: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > section': {
      width: '10%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
      '& > div': {
        flex: 1,
        height: 0.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.grey[500]
      },
      '& > p': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        color: theme.palette.grey[500]
      }
    }
  },

  googleBtn: {
    width: '120%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  readyLinkedIn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px'
  },

  emailTitle: {
    fontSize: '18px',
    textAlign: 'center'
  }
}))