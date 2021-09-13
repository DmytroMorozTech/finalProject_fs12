import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  card: {
    width: 500,
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2%'
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
  },

  forgotPasswordLink: {
    textDecoration: 'none',
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.sh3.fontWeight,
    lineHeight: '4rem',
    padding: '0.5rem',
    color: '#0a66c2',
    '&:hover': {
      borderRadius: '20px',
      textDecoration: 'underline',
      backgroundColor: '#d0e8ff'
    },
    '&:visited': {
      color: '#0a66c2'
    }
  },

  signInButton: {
    fontSize: theme.typography.h3.fontSize
  }

}))
