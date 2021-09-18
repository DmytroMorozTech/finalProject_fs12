import { MenuItem } from '@material-ui/core'
import React from 'react'
import styles from './styles'

function OrganizationAddition ({ icon, title, onClick }) {
  const classes = styles()

  return (
    <MenuItem className={classes.item} onClick={onClick}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.title}>{title}</div>
    </MenuItem>
  )
}

export default OrganizationAddition
