import Style from './styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import React from 'react'

function ThreeDots () {
  const classes = Style()
  return (
    <div className={classes.dots}>
      <MoreHorizIcon/>
    </div>
  )
}

export default ThreeDots