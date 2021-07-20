import LinkedInIcon from '@material-ui/icons/LinkedIn'
import StyleLinkedinLogo from './StyleLinkedinLogo'

function LinkedinLogo () {
  const classes = StyleLinkedinLogo()
  return (
    <div className={classes.logo}>
      <span>Linked</span>
      <LinkedInIcon/>
    </div>
  )
}

export default LinkedinLogo