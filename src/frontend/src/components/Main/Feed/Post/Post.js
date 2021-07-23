import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import TelegramIcon from '@material-ui/icons/Telegram'
import PublicIcon from '@material-ui/icons/Public'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Style from './styles'
import { useState } from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import LikeMiniIcon from '../../../../shared/LikeMiniIcon/LikeMiniIcon'
import Avatar from '../../../../shared/Avatar/Avatar'

function Post ({userName = 'Steve Noiry', position = 'Java Developer', postTime = '1h', quantityOfLikes = 10595, quantityOfComments = 420, quantityOfViews = 244688}) {
  const classes = Style()

  const [liked, setLiked] = useState(false)

  return (
    <div className={classes.post}>
      <div className={classes.hiddenMenu}>
        <MoreHorizIcon/>
      </div>
      <hr className={classes.line} />
      <div className={classes.postAuthor}>
        <Avatar/>
        <div className={classes.userInfo}>
          <div className={classes.name}>
            {userName}
          </div>
          <div className={classes.position}>
            {position}
          </div>
          <div className={classes.postTime}>
            {postTime}
            <div className={classes.worldIcon}>
              <PublicIcon/>
            </div>
          </div>
        </div>
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