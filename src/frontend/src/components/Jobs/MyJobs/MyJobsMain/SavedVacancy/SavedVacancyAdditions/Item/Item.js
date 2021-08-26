import React from 'react'
import styles from './styles'

function Item ({ Icon, title, onClick }) {
  const classes = styles()

  return (
    <div className={classes.item} onClick={onClick}>
      <div className={classes.icons}>{Icon}</div>
      <div className={classes.titles}>{title}</div>
    </div>
  )
}

export default Item
