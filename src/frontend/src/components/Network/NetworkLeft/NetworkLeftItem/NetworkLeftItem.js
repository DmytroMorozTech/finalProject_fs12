import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'

function NetworkLeftItem ({ Icon, title, number, to, onClick }) {
  const classes = styles()

  return (
    <Link to={to} className={classes.container} onClick={onClick}>
      <div className={classes.items}>
        <div className={classes.icons}>{Icon}</div>
        <div className={classes.titles}>{title}</div>
      </div>
      <div className={classes.number}>{number}</div>
    </Link>
  )
}

export default NetworkLeftItem
