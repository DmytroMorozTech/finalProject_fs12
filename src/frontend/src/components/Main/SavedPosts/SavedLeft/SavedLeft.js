import React from 'react'
import styles from './styles'
import Bookmark from '../../../../shared/BookmarkIcon/Bookmark'

function SavedLeft () {
  const classes = styles()
    
  return (
    <div className={classes.savedLeftRoot}>
      <div className={classes.savedLeftElements}>
        <Bookmark/>
      </div>
      <div className={classes.savedLeftElementsCounter}>
        <h4 className={classes.savedLeftElementsText}>Saved Posts</h4>
      </div>
    </div>
  )
}

export default SavedLeft