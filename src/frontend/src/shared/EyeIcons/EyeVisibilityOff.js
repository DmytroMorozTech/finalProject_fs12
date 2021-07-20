import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import StyleEyes from './StyleEyes'

function EyeVisibility () {
  const classes = StyleEyes()
  return (
    <div>
      <VisibilityOffIcon className={classes.eyes}/>
    </div>
  )
}

export default EyeVisibility