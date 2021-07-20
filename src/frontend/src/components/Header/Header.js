import Navbar from './Navbar/Navbar'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import StyleHeader from './StyleHeader'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Hidden } from '@material-ui/core'

function Header () {
  const classes = StyleHeader()
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