import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import StyleLikeMini from './StyleLikeMini'

function LikeMiniIcon () {
  const classes = StyleLikeMini()
  return (
    <div>
      <ThumbUpAltIcon className={classes.likeMini}/>
    </div>
  )
}

export default LikeMiniIcon