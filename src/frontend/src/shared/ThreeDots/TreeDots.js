import styles from './styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import React from 'react'

function ThreeDots () {
  const classes = styles()
  return (
    <div className={classes.dots}>
      <MoreHorizIcon className={classes.icon}/>
    </div>
  )
}

export default ThreeDots