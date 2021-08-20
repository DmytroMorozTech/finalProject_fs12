import React from 'react'
import styles from './styles'

function Item ({ Icon, title, number, onClick }) {
  const classes = styles()

  return (
    <div className={classes.container} onClick={onClick}>
      <div className={classes.items} >
        <div className={classes.icons}>{Icon}</div>
        <div className={classes.titles}>{title}</div>
      </div>
      <div className={classes.number}>{number}</div>
    </div>
  )
}

export default Item
