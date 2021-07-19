import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { Hidden } from '@material-ui/core'
import Style from './StyleItem'

const Item = ({ Icon, title, arrow, onClick }) => {
  const classes = Style()
  return (
    <div className={classes.menuItem} onClick={onClick}>
      {Icon}
      <Hidden mdDown>
        <div className={classes.title}>
          <span>{title}</span>
          {arrow && <ArrowDropDownIcon/>}
        </div>
      </Hidden>
    </div>
  )
}

export default Item