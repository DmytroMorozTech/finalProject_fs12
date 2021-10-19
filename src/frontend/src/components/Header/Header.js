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

  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false)

  const onSearchBarOpenHandler = () => setSearchBarIsOpen(true)

  const onSearchBarCloseHandler = () => setSearchBarIsOpen(false)

  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerLogoSearch}>
          <Link to="/home">
            <div className={classes.headerLogo}>
              <LinkedInIcon fontSize="inherit"/>
            </div>
          </Link>

          {/* Searchbar for desktop version */}
          <Hidden smDown>
            <SearchBar handleCloseSearchBar={onSearchBarCloseHandler} isHandleClose={false}/>
          </Hidden>

          {/* Searchbar for mobile version */}
          <Hidden mdUp>
            {searchBarIsOpen
              ? <ClickAwayListener onClickAway={onSearchBarCloseHandler}>
                <Paper elevation={0}>
                  <SearchBar handleCloseSearchBar={onSearchBarCloseHandler} isHandleClose={true}/>
                </Paper>
              </ClickAwayListener>
              : (<div
                id='SearchBarIconButton'
                className={classes.headerButtonSearch}
                onClick={onSearchBarOpenHandler}>
                <SearchRoundedIcon fontSize="inherit" className={classes.icon}/>
                <Hidden xsDown>
                  <div className={classes.title}>Search</div>
                </Hidden>
              </div>)
            }
          </Hidden>
        </div>

        {searchBarIsOpen
          ? null
          : <Navbar/>
        }
      </div>

      {modal}
    </>
  )
}

export default Header
