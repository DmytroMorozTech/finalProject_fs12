import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  forgotPageCard: {
    width: 450,
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px'
  },

  mainTextContainer: {
    display: 'flex',
    flexDirection: 'column'
  },

  mainText: {
    fontSize: theme.typography.h1.fontSize,
    lineHeight: theme.typography.h3.lineHeight,
    margin: 0
  },
  subText: {
    fontSize: theme.typography.h5.fontSize
  },
  form: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  link: {
    marginTop: theme.spacing(2),
    justifyContent: 'space-around',
    paddingTop: theme.spacing(2),
    textDecoration: 'none'
  },
  cardBtn: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  resetButton: {
    width: '100%',
    fontSize: theme.typography.h3.fontSize,
    marginTop: '2rem',
    marginLeft: 0
  },

  signInLineLink: {
    width: '4rem',
    textDecoration: 'none',
    border: '1px solid transparent',
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.sh3.fontWeight,
    lineHeight: '2rem',
    margin: '1rem auto',
    padding: '0.3rem 0.5rem',
    color: 'rgba(0,0,0,0.6)',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
      borderRadius: '20px',
      backgroundColor: '#d0e8ff'
    },
    '&:visited': {
      color: 'rgba(0,0,0,0.6)'
    }
  }

}))