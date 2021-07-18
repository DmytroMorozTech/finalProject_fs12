import Navbar from './Navbar/Navbar'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import StyleHeader from './StyleHeader'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function Header () {
  const classes = StyleHeader()
  return (
    <div className={classes.header}>
      <div className={classes.header_logo_search}>
        <div className={classes.header_logo}>
          <LinkedInIcon/>
        </div>
        <div className={classes.header_search}>
          <SearchRoundedIcon/>
          <input placeholder="Search"/>
        </div>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header