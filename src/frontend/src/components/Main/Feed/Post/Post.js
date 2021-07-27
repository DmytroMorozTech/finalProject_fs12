import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import TelegramIcon from '@material-ui/icons/Telegram'
import PublicIcon from '@material-ui/icons/Public'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Style from './styles'
import React, { useState } from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import LikeMiniIcon from '../../../../shared/LikeMiniIcon/LikeMiniIcon'
import Avatar from '../../../../shared/Avatar/Avatar'
import image from '../../../../temporaryImages/abstraktsiia.jpg'
import Typography from '@material-ui/core/Typography'
import { Hidden, TextField } from '@material-ui/core'

function Post ({
  userName = 'Steve Noiry',
  position = 'Java Developer',
  postTime = '1h',
  text = 'This text in Post was generated automatically!',
  picture = image,
  quantityOfLikes = 10595,
  quantityOfComments = 420,
  quantityOfViews = 244688
}) {
  const classes = Style()
  const [liked, setLiked] = useState(false)

  return (
    <div className={classes.post}>
      <div className={classes.hiddenMenu}>
        <MoreHorizIcon/>
      </div>
      <hr className={classes.line}/>
      <div className={classes.postAuthor}>
        <Avatar/>
        <div className={classes.userInfo}>
          <Typography variant="body1" className={classes.name}>
            {userName}
          </Typography>
          <Typography variant="body2" className={classes.position}>
            {position}
          </Typography>
          <Typography variant="body2" className={classes.postTime}>
            {postTime}
            <div className={classes.worldIcon}>
              <PublicIcon/>
            </div>
          </Typography>
        </div>
      </div>
      <Typography variant="body1" gutterBottom className={classes.text}>
        {text}
      </Typography>
      <div>
        <img src={picture} alt={picture} className={classes.picture}/>
      </div>
      <div className={classes.quantity}>
        <Typography variant="body2" className={classes.quantityText}>
          <LikeMiniIcon/>
          {quantityOfLikes}
        </Typography>
        <FiberManualRecordIcon/>
        <Typography variant="body2" className={classes.quantityText}>
          {quantityOfComments} comments
        </Typography>
        <FiberManualRecordIcon/>
        <Typography variant="body2" className={classes.quantityText}>
          {quantityOfViews} views
        </Typography>
      </div>
      <hr className={classes.line}/>
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
      <div className={classes.addComment}>
        <div className={classes.avatar}>
          <Avatar/>
        </div>
        <TextField
          id="outlined-full-width"
          className={classes.commentField}
          placeholder="Add comment"
          fullWidth
          margin="none"
          variant="outlined"
          color="secondary"
          size="small"
        />
      </div>
    </div>
  )
}

export default Post
