import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  card: {
    width: 350,
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4)
  },

  form: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    '& > input': {
      border: theme.border.simple,
      borderRadius: theme.shape.extraSmall,
      padding: theme.spacing(2)
    }
  },

  google: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > section': {
      width: '100%',
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
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))
