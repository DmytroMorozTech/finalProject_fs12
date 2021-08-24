import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'

function Item ({ Icon, title, to, onClick }) {
  const classes = styles()

  return (
    <Link to={to} className={classes.container} onClick={onClick}>
      <div className={classes.item}>
        <div className={classes.icons}>{Icon}</div>
        <div className={classes.titles}>{title}</div>
      </div>
    </Link>
  )
}

export default Item
