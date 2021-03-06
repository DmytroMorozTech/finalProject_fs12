import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  registerPageCard: {
    maxWidth: 500,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px'
  },

  title: {
    marginLeft: theme.spacing(5),
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.sh3.fontWeight,
    lineHeight: 0
  },

  subtitle: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5)
  },

  registerBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.spacing(3)
  },

  form: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  google: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > section': {
      width: '100%',
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
        fontSize: theme.typography.h3.fontSize,
        padding: theme.spacing(1),
        color: theme.palette.grey[500]
      }
    }
  },

  googleBtnWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  googleBtn: {
    border: '2px solid #0a66c2',
    borderRadius: '24px',
    width: '100%',
    fontSize: theme.typography.h3.fontSize,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    cursor: 'pointer',
    '& > span': {
      marginLeft: 15,
      color: theme.palette.primary.main,
      fontWeight: theme.typography.h5.fontWeight
    },
    '& > img': {
      width: '10%'
    },
    '&:hover': {
      backgroundColor: '#d0e8ff'
    }
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
  },

  signInLineWrapper: {
    zIndex: 150,
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.typography.sh3.fontSize
  },

  signInLineLink: {
    textDecoration: 'none',
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.sh3.fontWeight,
    lineHeight: '2rem',
    padding: '0.3rem 0.5rem',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    },
    '&:visited': {
      color: theme.palette.primary.main
    }
  },

  joinButton: {
    fontSize: theme.typography.h3.fontSize
  }
}))
