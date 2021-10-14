import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  fullscreenTrue: {
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.background.default,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  logo: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2)
  },

  preloader: {
    width: '100px',
    margin: '0 auto'
  }
}))
