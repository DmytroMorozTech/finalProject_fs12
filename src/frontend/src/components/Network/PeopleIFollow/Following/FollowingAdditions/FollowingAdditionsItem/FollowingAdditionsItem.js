import styles from './styles'
import React from 'react'

function FollowingAdditionsItem ({ title, subtitle, onClick }) {
  const classes = styles()

  return (
    <div className={classes.item} onClick={onClick}>
      <div className={classes.title}>{title}</div>
      <div className={classes.subtitle}>{subtitle}</div>
    </div>
  )
}

export default FollowingAdditionsItem
