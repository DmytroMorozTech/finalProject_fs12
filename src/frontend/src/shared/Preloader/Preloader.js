import styles from './styles'
import LinkedinLogo from '../LinkedinLogo/LinkedinLogo'
import { CircularProgress, LinearProgress } from '@material-ui/core'

function Preloader ({ fullscreen = false }) {
  const classes = styles()

  if (fullscreen) {
    return (<FullscreenTrue/>)
  } else {
    return (<FullscreenFalse/>)
  }

  function FullscreenTrue () {
    return (
      <div className={classes.fullscreenTrue}>
        <div className={classes.logo}>
          <LinkedinLogo/>
        </div>
        <div className={classes.preloader}>
          <LinearProgress/>
        </div>
      </div>
    )
  }

  function FullscreenFalse () {
    return (
      <div className={classes.fullscreenFalse}>
        <CircularProgress/>
      </div>
    )
  }
}

export default Preloader
