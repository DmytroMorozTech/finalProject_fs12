import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({
  forgot: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 150,
    flexDirection: 'column'
  },
  forgotPage: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    backgroundColor: theme.palette.background.paper,
    width: '100vw',
    paddingLeft: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  link: {
    textDecoration: 'none',
    marginLeft: '5rem'
  },

  signInLineLink: {
    textDecoration: 'none',
    border: '1px solid transparent',
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.sh3.fontWeight,
    lineHeight: '2rem',
    padding: '0.3rem 0.5rem',
    color: 'rgba(0,0,0,0.6)',
    cursor: 'pointer',
    '&:hover': {
      borderRadius: '20px',
      backgroundColor: '#d0e8ff'
    },
    '&:visited': {
      color: 'rgba(0,0,0,0.6)'
    }
  },

  joinNowBtn: {
    color: '#0a66c2',
    textDecoration: 'none',
    border: '2px solid #0a66c2',
    borderRadius: '15px',
    width: '7rem',
    fontSize: theme.typography.h3.fontSize,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    cursor: 'pointer',
    padding: '0.3rem 0.5rem',
    marginLeft: '1rem',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#d0e8ff'
    }
  },

  headerTextContainer: {
    marginRight: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))