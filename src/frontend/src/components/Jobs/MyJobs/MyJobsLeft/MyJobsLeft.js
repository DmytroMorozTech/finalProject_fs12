import styles from './styles'
import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark'

function MyJobsLeft (props) {
  const classes = styles()

  const {number = 1} = props

  return (
    <div>
      <div className={classes.item}>
        <div className={classes.icon}><BookmarkIcon fontSize="inherit"/></div>
        <div className={classes.title}>My Items</div>
      </div>
      <hr className={classes.line}/>
      <div className={classes.subtitle}>
        <div>My Jobs</div>
        <div className={classes.number}>{number}</div>
      </div>
    </div>
  )
}

export default MyJobsLeft
