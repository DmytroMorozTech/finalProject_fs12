import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'

function JobsLeftItem ({ Icon, title, to }) {
  const classes = styles()

  return (
    <Link to={to} className={classes.container}>
      <div className={classes.item}>
        <div className={classes.icons}>{Icon}</div>
        <div className={classes.titles}>{title}</div>
      </div>
    </Link>
  )
}

export default JobsLeftItem
