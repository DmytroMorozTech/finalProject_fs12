import Style from './styles'

function Avatar (props) {
  const { avatarUrl } = props

  const classes = Style()
  return (
    <img src={avatarUrl} alt={avatarUrl} className={classes.userAvatar}/>
  )
}

export default Avatar
