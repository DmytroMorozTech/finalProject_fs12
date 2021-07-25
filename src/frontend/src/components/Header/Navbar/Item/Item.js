import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { Hidden } from '@material-ui/core'
import Style from './styles'
import {NavLink} from 'react-router-dom'

const Item = ({ Icon, title, arrow, onClick, to }) => {
  const classes = Style()
  return (
    <div className={classes.menuItem} onClick={onClick}>
      <NavLink className={classes.itemPrimary} to={to}>
        {Icon}
        <Hidden mdDown>
          <div className={classes.title}>
            <span className={classes.itemPrimaryText} >{title}</span>
            {arrow && <ArrowDropDownIcon/>}
          </div>
        </Hidden>
      </NavLink>
    </div>
  )
}

export default Item