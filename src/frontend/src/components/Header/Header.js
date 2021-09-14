import Navbar from './Navbar/Navbar'
import styles from './styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import {useSelector} from 'react-redux'
import {openModalSelector} from '../../redux/Modal/modalSelector'
import CustomizedDialogs from '../Modal/Modal'
import {Link} from 'react-router-dom'
import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import {Hidden} from '@material-ui/core'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'

function Header () {
  const classes = styles()
  const isModalOpen = useSelector(openModalSelector)
  const modal = isModalOpen ? <CustomizedDialogs/> : null

  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerLogoSearch}>
          <Link to="/home">
            <div className={classes.headerLogo}>
              <LinkedInIcon fontSize="inherit"/>
            </div>
          </Link>

          <Hidden smDown>
            <SearchBar/>
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
