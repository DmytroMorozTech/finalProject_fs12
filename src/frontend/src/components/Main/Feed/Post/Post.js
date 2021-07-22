import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import TelegramIcon from '@material-ui/icons/Telegram'
import Style from './styles'
import { useState } from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import LikeMiniIcon from '../../../../shared/LikeMiniIcon/LikeMiniIcon'
import ShareBox from './ShareBox/ShareBox'

function Post ({quantityOfLikes = 10595, quantityOfComments = 420, quantityOfViews = 244688}) {
  const classes = Style()

  const [liked, setLiked] = useState(false)

  return (
    <div>
      <ShareBox/>
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
            <span className="like">Like</span>
          </div>
        </div>
        <div className={classes.item}>
          <ChatOutlinedIcon/>
          <span>Comment</span>
        </div>
        <div className={classes.item}>
          <RedoOutlinedIcon/>
          <span>Share</span>
        </div>
        <div className={classes.item}>
          <TelegramIcon/>
          <span>Send</span>
        </div>
      </div>
    </div>
  )
}

export default Post