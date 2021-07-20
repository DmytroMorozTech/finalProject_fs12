import VisibilityIcon from '@material-ui/icons/Visibility'
import StyleEyes from './StyleEyes'

function EyeVisibility () {
  const classes = StyleEyes()
  return (
    <div>
      <VisibilityIcon className={classes.eyes}/>
    </div>
  )
}

export default EyeVisibility