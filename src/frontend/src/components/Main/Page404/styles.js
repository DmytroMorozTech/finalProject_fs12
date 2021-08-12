import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 150
  },

  header: {
    backgroundColor: theme.palette.background.paper,
    width: '100vw',
    paddingLeft: '15vw'
  },

  pageImg: {
    marginTop: '15vh',
    backgroundAttachment: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '300px'
  },

  link: {
    textDecoration: 'none'
  }
}))
