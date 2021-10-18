import { MenuItem } from '@material-ui/core'
import React from 'react'
import styles from './styles'
import { toggleBookmarkAction } from '../../../../../redux/Post/postActions'
import { useDispatch } from 'react-redux'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Typography from '@material-ui/core/Typography'

function PostAddition (props) {
  const classes = styles()

  const { postId, isBookmarkedByActiveUser, feedType } = props

  const dispatch = useDispatch()
  const handleBookmarkPost = () => {
    dispatch(toggleBookmarkAction(postId, feedType))
  }

  return (
    <div>
      <MenuItem className={classes.menuItem}>
        <div
          id='item'
          className={classes.item}
          onClick={handleBookmarkPost}>
          <div className={classes.icons}>
            {isBookmarkedByActiveUser ? <BookmarkIcon fontSize="inherit"/> : <BookmarkBorderIcon fontSize="inherit"/>}
          </div>
          <div className={classes.titles}>
            <Typography variant="h5">
              {isBookmarkedByActiveUser ? 'Unsave' : 'Save'}
            </Typography>
            <Typography variant="h6">
              {isBookmarkedByActiveUser ? 'Unsave from your saved list' : 'Save for later'}
            </Typography>
          </div>
        </div>
      </MenuItem>
    </div>
  )
}

export default PostAddition
