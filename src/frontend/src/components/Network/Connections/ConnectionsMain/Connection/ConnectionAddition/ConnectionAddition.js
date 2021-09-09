import { MenuItem } from '@material-ui/core'
import React from 'react'
import styles from './styles'
import DeleteIcon from '@material-ui/icons/Delete'

function ConnectionAddition (props) {
  const classes = styles()

  const {onClick} = props

  return (
    <div>
      <MenuItem className={classes.menuItem}>
        <div className={classes.item} onClick={onClick}>
          <div className={classes.icons}>
            <DeleteIcon fontSize='inherit'/>
          </div>
          <div className={classes.titles}>Remove connection</div>
        </div>
      </MenuItem>
    </div>
  )
}

export default ConnectionAddition
