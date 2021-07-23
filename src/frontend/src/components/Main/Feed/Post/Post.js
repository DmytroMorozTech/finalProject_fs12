import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import TelegramIcon from '@material-ui/icons/Telegram'
import Style from './styles'
import { useState } from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import LikeMiniIcon from '../../../../shared/LikeMiniIcon/LikeMiniIcon'
import image from '../../../../temporaryImages/abstraktsiia.jpg'
import Typography from '@material-ui/core/Typography'
import { Hidden } from '@material-ui/core'

function Post ({
  text = 'This Post was generated automatically!',
  picture = image, quantityOfLikes = 10595, quantityOfComments = 420, quantityOfViews = 244688
}) {
  const classes = Style()

  const [liked, setLiked] = useState(false)

  return (
    <div className={classes.post}>

      <Typography variant="body2" gutterBottom>
        {text}
      </Typography>
      <div>
        <img src={picture} alt={picture} className={classes.picture}/>
      </div>
      <div className={classes.quantity}>
        <span>
          <LikeMiniIcon/>
          {quantityOfLikes}
        </span>
        <FiberManualRecordIcon/>
        <span>{quantityOfComments} comments</span>
        <FiberManualRecordIcon/>
        <span>{quantityOfViews} views</span>
      </div>
      <div className={classes.block}>
        <div className={liked ? classes.liked : ''}>
          <div className={classes.item} onClick={() => setLiked(!liked)}>
            <ThumbUpOutlinedIcon/>
            <Hidden xsDown>
              <span className="like">Like</span>
            </Hidden>
          </div>
        </div>
        <div className={classes.item}>
          <ChatOutlinedIcon/>
          <Hidden xsDown>
            <span>Comment</span>
          </Hidden>
        </div>
        <div className={classes.item}>
          <RedoOutlinedIcon/>
          <Hidden xsDown>
            <span>Share</span>
          </Hidden>
        </div>
        <div className={classes.item}>
          <TelegramIcon/>
          <Hidden xsDown>
            <span>Send</span>
          </Hidden>
        </div>
      </div>
    </div>
  )
}

export default Post
