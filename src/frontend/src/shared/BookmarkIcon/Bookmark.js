import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import StyleBookmark from './StyleBookmark'

function Bookmark () {
  const classes = StyleBookmark()
  return (
    <div>
      <BookmarkBorderIcon className={classes.bookmark}/>
    </div>
  )
}

export default Bookmark