import Navbar from './Navbar/Navbar'
import styles from './styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { useSelector } from 'react-redux'
import { openModalSelector } from '../../redux/Modal/modalSelector'
import CustomizedDialogs from '../Modal/Modal'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import { ClickAwayListener, Hidden, Paper } from '@material-ui/core'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'

function Header () {
  const classes = styles()
  const isModalOpen = useSelector(openModalSelector)
  const modal = isModalOpen ? <CustomizedDialogs/> : null

  const [openSearchBar, setOpenSearchBar] = useState(false)

  const handleSearchBar = () => {
    setOpenSearchBar(true)
  }

  const handleCloseSearchBar = () => {
    setOpenSearchBar(false)
  }

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
            <SearchBar handleCloseSearchBar={handleCloseSearchBar} isHandleClose={false}/>
          </Hidden>

          <Hidden mdUp>
            {openSearchBar
              ? <ClickAwayListener onClickAway={handleCloseSearchBar}>
                <Paper elevation={0}>
                  <SearchBar handleCloseSearchBar={handleCloseSearchBar} isHandleClose={true}/>
                </Paper>
              </ClickAwayListener>
              : (<div className={classes.headerButtonSearch} onClick={handleSearchBar}>
                <SearchRoundedIcon fontSize="inherit" className={classes.icon}/>
                <Hidden xsDown>
                  <div className={classes.title}>Search</div>
                </Hidden>
              </div>)
            }
          </Hidden>
        </div>
        {openSearchBar
          ? null
          : <Navbar/>
        }
      </div>
      {modal}
    </>
  )
}

export default Header
