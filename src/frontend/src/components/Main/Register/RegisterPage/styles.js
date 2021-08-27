import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  registerPageCard: {
    width: 450,
    height: 550,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  google: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > section': {
      width: '10%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(1),
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
        padding: theme.spacing(1),
        color: theme.palette.grey[500]
      }
    }
  },

  googleBtn: {
    width: '100%',
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
    fontSize: theme.typography.h5.fontSize
  },

  emailTitle: {
    fontSize: theme.typography.h5.fontSize,
    textAlign: 'center'
  }
}))