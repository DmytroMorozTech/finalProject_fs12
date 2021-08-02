import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Style from './styles'

function Avatar (props) {
  const { avatarUrl } = props

  const classes = Style()
  return (
    <>
      {
        avatarUrl == null
          ? <AccountCircleIcon className={classes.avatar}/>
          : <img src={avatarUrl} alt={avatarUrl} className={classes.userAvatar}/>

      }
    </>
  )
}

export default Avatar
