import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  login: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 150
  },

  loginCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  signUpLineWrapper: {
    zIndex: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.typography.sh3.fontSize
  },

  signUpLineLink: {
    textDecoration: 'none',
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.sh3.fontWeight,
    lineHeight: '2rem',
    padding: '0.3rem 0.5rem',
    color: '#0a66c2',
    '&:hover': {
      textDecoration: 'underline'
    },
    '&:visited': {
      color: '#0a66c2'
    }
  },

  signInLogo: {
    // position: 'absolute',
    // top: '2rem',
    // left: '3rem',
    // zIndex: 150
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    flexDirection: 'column',
    alignItems: 'center'
  }
}))
