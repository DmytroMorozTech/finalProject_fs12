import Navbar from './Navbar/Navbar'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import Style from './styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Hidden } from '@material-ui/core'

function Header () {
  const classes = Style()
  return (
    <div className={classes.header}>
      <div className={classes.header_logo_search}>
        <div className={classes.header_logo}>
          <LinkedInIcon/>
        </div>
        <Hidden mdDown>
          <div className={classes.header_search}>
            <SearchRoundedIcon/>
            <input placeholder="Search"/>
          </div>
        </Hidden>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header