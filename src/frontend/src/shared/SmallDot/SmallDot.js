import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import React from 'react'
import styles from './styles'

function SmallDot () {
  const classes = styles()
  return (
    <FiberManualRecordIcon fontSize="inherit" className={classes.smallDot}/>
  )
}

export default SmallDot
