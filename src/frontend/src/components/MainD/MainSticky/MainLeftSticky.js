import React from 'react'
import styles from './styles'
import { Link } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

function MainLeftSticky () {
  const classes = styles()
  const preventDefault = (event) => event.preventDefault()

  return (
    <div className={classes.root}>
      <Link href="#" onClick={preventDefault}>
        <div className={classes.item}>Groups</div>
      </Link>
      <div className={classes.events}>
        <Link href="#" onClick={preventDefault} className={classes.item}>
          Events
        </Link>
        <AddIcon className={classes.add}/>
      </div>
      <Link href="#" onClick={preventDefault}>
        <div className={classes.item}>Followed Hashtags</div>
      </Link>
      <hr className={classes.line}/>
      <Link href="#" onClick={preventDefault} underline="none">
        <div className={classes.discover}>Discover more</div>
      </Link>
    </div>
  )
}

export default MainLeftSticky
