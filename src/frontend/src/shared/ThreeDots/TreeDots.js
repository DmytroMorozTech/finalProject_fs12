import styles from './styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import React from 'react'

function ThreeDots () {
  const classes = styles()
  return (
    <MoreHorizIcon className={classes.icon}/>
  )
}

export default ThreeDots
