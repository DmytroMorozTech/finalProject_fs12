import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import React from 'react'
import Style from './styles'

function SmallDot () {
  const classes = Style()
  return (
    <span className={classes.smallDot}>
      <FiberManualRecordIcon/>
    </span>
  )
}

export default SmallDot