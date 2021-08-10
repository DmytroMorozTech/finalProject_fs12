import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import React from 'react'
import styles from './styles'

function SmallDot () {
  const classes = styles()
  return (
    <span className={classes.smallDot}>
      <FiberManualRecordIcon fontSize='inherit'/>
    </span>
  )
}

export default SmallDot
