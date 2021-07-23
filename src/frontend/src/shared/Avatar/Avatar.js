import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Style from './styles'

function Avatar () {
  const classes = Style()
  return (
    <div>
      <AccountCircleIcon className={classes.avatar}/>
    </div>
  )
}

export default Avatar