import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import {Badge, Hidden} from '@material-ui/core'
import styles from './styles'
import { NavLink } from 'react-router-dom'
import SimpleMenu from '../../../../shared/PopupMenu/PopupMenu'
import UserData from '../../../UserData/UserData'
import * as actions from '../../../../redux/Message/messageActionTypes'
import {useDispatch, useSelector} from 'react-redux'
import {numberOfNewMessagesSelector} from '../../../../redux/Message/messageSelector'

const NavbarItem = ({ Icon, title, arrow, toggleMenu, badge, to, exact = true }) => {
  const classes = styles()
  const dispatch = useDispatch()
  const newMessages = useSelector(numberOfNewMessagesSelector)

  const notLink = (e) => {
    e.preventDefault()
  }

  function renderNewChatsNumber () {
    return typeof newMessages === 'string' ? 0 : newMessages
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
    : badge
      ? <Badge className={classes.badge} color="secondary" badgeContent={renderNewChatsNumber()} max={99}>
        {renderMenuItem}
      </Badge>
      : renderMenuItem

  return (
    <div className={classes.menuItem}>
      {renderMenu}
    </div>
  )
}

export default NavbarItem
