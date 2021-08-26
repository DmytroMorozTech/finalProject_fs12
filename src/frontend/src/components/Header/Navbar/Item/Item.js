import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { Hidden } from '@material-ui/core'
import styles from './styles'
import { NavLink } from 'react-router-dom'
import SimpleMenu from '../../../../shared/PopupMenu/PopupMenu'
import UserData from '../../../UserData/UserData'
import clsx from 'clsx'

const Item = ({ Icon, title, arrow, toggleMenu, to, exact = true }) => {
  const classes = styles()

  const notLink = (e) => {
    e.preventDefault()
  }

  const renderMenuItem = (
    <NavLink className={clsx(classes.itemPrimary)}
      onClick={(e) => toggleMenu && notLink(e)}
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

export default Item
