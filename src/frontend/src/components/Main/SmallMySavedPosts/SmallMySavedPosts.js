import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'
import BookmarkIcon from '@material-ui/icons/Bookmark'

function SmallMySavedPosts () {
  const classes = styles()

  return (
    <Link to='/bookmarked' className={classes.smallMyItems}>
      <div className={classes.item}>
        <BookmarkIcon fontSize="inherit" className={classes.icon}/>
        <span className={classes.title}>My saved posts</span>
      </div>
    </Link>
  )
}

export default SmallMySavedPosts
