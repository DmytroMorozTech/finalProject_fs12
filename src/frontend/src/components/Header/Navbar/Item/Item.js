import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { Hidden } from '@material-ui/core'
import Style from './styles'
import {NavLink} from 'react-router-dom'
import SimpleMenu from '../../../../shared/PopupMenu/PopupMenu'
import UserData from '../../../UserData/UserData'

const Item = ({ Icon, title, arrow, toggleMenu, onClick, to }) => {
  const classes = Style()
  const clickBehaviour = toggleMenu ? { pointerEvents: 'none' } : null

  const renderMenuItem = (
    <NavLink style={clickBehaviour} className={classes.itemPrimary} activeClassName={classes.itemPrimaryActive} to={to}>
      {Icon}
      <Hidden mdDown>
        <div className={classes.title}>
          <span className={classes.itemPrimaryText}>{title}</span>
          {arrow && <ArrowDropDownIcon/>}
        </div>
      </Hidden>
    </NavLink>
  )

  const renderMenu = toggleMenu ? <SimpleMenu menuItem={renderMenuItem} userData={<UserData/>}/> : renderMenuItem

  return (
    <div className={classes.menuItem} onClick={onClick}>
      {renderMenu}
    </div>
  )
}

export default Item
