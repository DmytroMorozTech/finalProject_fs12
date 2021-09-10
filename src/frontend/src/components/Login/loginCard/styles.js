import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  card: {
    width: 550,
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
    width: '90%',
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
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  signInLineWrapper: {
    width: '90%'
  },

  signInLine: {
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.sh3.fontWeight,
    lineHeight: 0
  },

  signInTagline: {
    fontSize: theme.typography.h3.fontSize,
    lineHeight: 0
  }

}))
