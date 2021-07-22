import VisibilityIcon from '@material-ui/icons/Visibility'
import Style from './styles'

function EyeVisibility () {
  const classes = Style()
  return (
    <div>
      <VisibilityIcon className={classes.eyes}/>
    </div>
  )
}

export default EyeVisibility