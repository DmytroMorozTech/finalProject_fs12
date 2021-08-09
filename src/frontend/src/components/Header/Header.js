import Navbar from './Navbar/Navbar'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import styles from './styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Hidden } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { openModalSelector } from '../../redux/Modal/modalSelector'
import CustomizedDialogs from '../Modal/Modal'

function Header () {
  const classes = styles()
  const isModalOpen = useSelector(openModalSelector)
  const modal = isModalOpen ? <CustomizedDialogs/> : null

  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerLogoSearch}>
          <div className={classes.headerLogo}>
            <LinkedInIcon fontSize="inherit"/>
          </div>
          <Hidden smDown>
            <div className={classes.headerSearch}>
              <SearchRoundedIcon fontSize="inherit"/>
              <input placeholder="Search"/>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.headerButtonSearch}>
              <SearchRoundedIcon fontSize="inherit" className={classes.icon}/>
              <Hidden xsDown>
                <div className={classes.title}>Search</div>
              </Hidden>
            </div>
          </Hidden>
        </div>
        <Navbar/>
      </div>
      {modal}
    </>
  )
}

export default Header
