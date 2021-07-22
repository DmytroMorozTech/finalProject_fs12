import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import Style from './styles'

function EyeVisibility () {
  const classes = Style()
  return (
    <div>
      <VisibilityOffIcon className={classes.eyes}/>
    </div>
  )
}

export default EyeVisibility