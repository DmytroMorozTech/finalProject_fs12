import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '256px'
  },
  page404Bg: {
    backgroundAttachment: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  bigText: {
    fontSize: '2.4rem'
  },
  smallText: {
    fontSize: '1.6rem',
    lineHeight: '1.5'
  },
  page404Btn: {
    width: '180px',
    height: '25px',
    textAlign: 'center',
    borderRadius: '75px',
    textDecoration: 'none',
    backgroundColor: 'white',
    color: '#0a66c2',
    '&:hover': {
      transtion: '0.5s ease',
      color: 'white',
      backgroundColor: '#0a66c2'
    }
  }
}))