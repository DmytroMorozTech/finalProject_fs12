import React from 'react'
import style from './styles'
import {Link} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

function MainLeftSticky () {
  const classes = style()
  const preventDefault = (event) => event.preventDefault()

  return (
    <div className={classes.root}>
      <Link href="#" onClick={preventDefault}>
        <div className={classes.item}>
          <span>Groups</span>
        </div>
      </Link>
      <Link href="#" onClick={preventDefault}>
        <div className={classes.events}>
          <span>Events</span>
          <div className={classes.add}>
            <AddIcon/>
          </div>
        </div>
      </Link>
      <Link href="#" onClick={preventDefault}>
        <div className={classes.item}>
          <span>Followed Hashtags</span>
        </div>
      </Link>
      <hr className={classes.line}/>
      <Link href="#" onClick={preventDefault} underline="none">
        <div className={classes.discover}>
          <span>Discover more</span>
        </div>
      </Link>
    </div>
  )
}
export default MainLeftSticky