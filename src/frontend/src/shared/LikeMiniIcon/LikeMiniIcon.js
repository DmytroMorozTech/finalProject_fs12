import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import Style from './styles'

function LikeMiniIcon () {
  const classes = Style()
  return (
    <div>
      <ThumbUpAltIcon className={classes.likeMini}/>
    </div>
  )
}

export default LikeMiniIcon