import styles from './styles'
import React from 'react'
import { MenuItem } from '@material-ui/core'

function FollowingAdditionsItem ({ title, subtitle, onClick }) {
  const classes = styles()

  return (
    <MenuItem className={classes.item} onClick={onClick}>
      <div className={classes.title}>{title}</div>
      <div className={classes.subtitle}>{subtitle}</div>
    </MenuItem>
  )
}

export default FollowingAdditionsItem
