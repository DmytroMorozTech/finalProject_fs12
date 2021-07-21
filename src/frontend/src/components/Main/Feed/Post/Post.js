import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import TelegramIcon from '@material-ui/icons/Telegram'
import StylePost from './StylePost'
import { useState } from 'react'

function Post () {
  const classes = StylePost()

  const [liked, setLiked] = useState(false)

  return (
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
  )
}

export default Post