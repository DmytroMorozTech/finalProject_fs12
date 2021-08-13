import React from 'react'
import styles from './styles'
import Bookmark from '../../../../shared/BookmarkIcon/Bookmark'

function SavedRight () {
  const classes = styles()
    
  return (
    <div className={classes.savedRightRoot}>
      <div className={classes.savedRightElements}>
        <Bookmark/>
      </div>
      <div className={classes.savedRightElementsCounter}>
        <h4 className={classes.savedRightElementsText}>Saved Posts</h4>
      </div>
    </div>
  )
}

export default SavedRight