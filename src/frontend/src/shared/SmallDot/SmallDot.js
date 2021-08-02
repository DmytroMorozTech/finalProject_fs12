import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import React from 'react'
import Style from './styles'

function SmallDot () {
  const classes = Style()
  return (
    <div className={classes.smallDot}>
      <FiberManualRecordIcon/>
    </div>
  )
}

export default SmallDot