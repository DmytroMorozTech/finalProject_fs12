import Navbar from './Navbar/Navbar'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import Style from './styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Hidden } from '@material-ui/core'
import {useSelector} from 'react-redux'
import {openModalSelector} from '../../redux/Modal/modalSelector'
import CustomizedDialogs from '../Modal/Modal'

function Header () {
  const classes = Style()
  const isModalOpen = useSelector(openModalSelector)
  const modal = isModalOpen ? <CustomizedDialogs/> : null

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
      {modal}
      <Navbar/>
    </div>
  )
}

export default Header
