import LinkedinLogo from '../../LinkedinLogo/LinkedinLogo'
import { LinearProgress } from '@material-ui/core'
import styles from './styles'

function FullscreenTrue () {
  const classes = styles()

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

export default FullscreenTrue
