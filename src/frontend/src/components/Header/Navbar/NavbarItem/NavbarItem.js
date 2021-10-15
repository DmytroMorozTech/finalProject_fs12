import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { Hidden } from '@material-ui/core'
import styles from './styles'
import { NavLink } from 'react-router-dom'
import SimpleMenu from '../../../../shared/PopupMenu/PopupMenu'
import UserData from '../../../UserData/UserData'
import * as actions from '../../../../redux/Message/messageActionTypes'
import {useDispatch} from 'react-redux'

const NavbarItem = ({ Icon, title, arrow, toggleMenu, to, exact = true }) => {
  const classes = styles()
  const dispatch = useDispatch()

  const notLink = (e) => {
    e.preventDefault()
  }

  const renderMenuItem = (
    <NavLink className={classes.itemPrimary}
      onClick={(e) => {
        toggleMenu && notLink(e)
        dispatch({ type: actions.SELECTED_CHAT, payload: false })
      }}
      activeClassName={classes.itemPrimaryActive}
      exact={exact}
      to={to}
    >
      <div className={classes.icons}>{Icon}</div>
      <Hidden xsDown>
        <div className={classes.title}>
          <span>{title}</span>
          {arrow && <ArrowDropDownIcon fontSize="inherit" className={classes.arrow} />}
        </div>
        <hr className={classes.line} />
      </Hidden>
    </NavLink>
  )

  const renderMenu = toggleMenu
    ? <SimpleMenu menuItem={renderMenuItem} userData={<UserData />} />
    : renderMenuItem

  return (
    <div className={classes.menuItem}>
      {renderMenu}
    </div>
  )
}

export default NavbarItem
