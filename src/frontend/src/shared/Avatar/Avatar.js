import styles from './styles'

function Avatar (props) {
  const { avatarUrl } = props

  const classes = styles()
  return (
    <img src={avatarUrl} alt={avatarUrl} className={classes.userAvatar}/>
  )
}

export default Avatar
