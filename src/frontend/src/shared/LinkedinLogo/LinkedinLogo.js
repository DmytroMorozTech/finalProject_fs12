import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Style from './styles'

function LinkedinLogo () {
  const classes = Style()
  return (
    <div className={classes.logo}>
      <span>Linked</span>
      <LinkedInIcon/>
    </div>
  )
}

export default LinkedinLogo