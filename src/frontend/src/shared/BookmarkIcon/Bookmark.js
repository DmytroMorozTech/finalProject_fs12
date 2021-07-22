import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import Style from './styles'

function Bookmark () {
  const classes = Style()
  return (
    <div>
      <BookmarkBorderIcon className={classes.bookmark}/>
    </div>
  )
}

export default Bookmark