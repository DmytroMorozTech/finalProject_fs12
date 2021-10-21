import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  forgotPageCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    padding: theme.spacing(3)
  },

  mainTextContainer: {
    display: 'flex',
    flexDirection: 'column'
  },

  mainText: {
    fontSize: theme.typography.h1.fontSize,
    lineHeight: theme.typography.h3.lineHeight,
    margin: 0,
    textAlign: 'center'
  },
  subText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.typography.h5.fontSize,
    margin: 0,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
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
    marginLeft: 0,
    marginBottom: theme.spacing(3)
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
  },

  spamText: {
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.grey[500],
    textAlign: 'center'
  },

  firstForgotPage: {
    width: '100%',
    maxWidth: 450
  },

  secondForgotPage: {
    width: '100%',
    maxWidth: 550
  },

  mainTextSecond: {
    width: '100%',
    fontSize: theme.typography.sh1.fontSize,
    textAlign: 'center'
  },

  signInLineLinkChange: {
    width: '4.5rem',
    textDecoration: 'none',
    border: '1px solid transparent',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.sh3.fontWeight,
    lineHeight: '1rem',
    padding: '0.3rem 0.5rem',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    margin: 0,
    '&:hover': {
      borderRadius: '20px',
      backgroundColor: '#d0e8ff'
    },
    '&:visited': {
      color: theme.palette.primary.main
    }
  },

  mainTextContainerSecond: {
    display: 'block'
  },

  mainTextWrapperSecond: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },

  subTextSecond: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: theme.typography.h5.fontSize,
    margin: 0,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },

  hideEmail: {
    marginLeft: '5px',
    fontWeight: theme.typography.h2.fontWeight
  },

  signInLineLinkResetCode: {
    width: '7rem',
    textDecoration: 'none',
    border: '1px solid transparent',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.sh3.fontWeight,
    lineHeight: '1rem',
    margin: 0,
    padding: '0.3rem 0.5rem',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    '&:hover': {
      borderRadius: '20px',
      backgroundColor: '#d0e8ff'
    },
    '&:visited': {
      color: theme.palette.primary.main
    }
  },

  passwordPromptLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.sh3.fontWeight,
    lineHeight: '1rem',
    margin: 0,
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    cursor: 'pointer',
    '&:visited': {
      color: theme.palette.primary.main
    }
  },

  thirdForgotPage: {
    width: '100%',
    maxWidth: 470
  },

  popoverHeader: {
    width: '28rem',
    padding: theme.spacing(2),
    fontSize: theme.typography.sh3.fontSize,
    lineHeight: '3rem'
  },

  popoverText: {
    fontSize: theme.typography.h5.fontSize,
    lineHeight: '1.5rem'

  },

  mainTextWrapperNewPassword: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },

  mainTextContainerNewPassword: {
    display: 'block'
  },

  subTextNewPassword: {
    fontSize: theme.typography.h5.fontSize
  },

  mainTextNewPassword: {
    fontSize: theme.typography.sh1.fontSize,
    textAlign: 'center'
  }
}))
