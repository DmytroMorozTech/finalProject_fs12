import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import styles from './styles'
import React from 'react'

function LikeMiniIcon () {
  const classes = styles()
  return (
    <ThumbUpAltIcon className={classes.likeMini}/>
  )
}

export default LikeMiniIcon
