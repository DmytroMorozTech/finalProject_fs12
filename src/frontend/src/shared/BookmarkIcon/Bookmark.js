import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import styles from './styles'

function Bookmark () {
  const classes = styles()
  return (
    <BookmarkBorderIcon fontSize='inherit' className={classes.bookmark}/>
  )
}

export default Bookmark
