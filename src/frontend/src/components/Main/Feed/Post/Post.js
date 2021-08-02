import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import TelegramIcon from '@material-ui/icons/Telegram'
import PublicIcon from '@material-ui/icons/Public'
import Style from './styles'
import React, { useState } from 'react'
import LikeMiniIcon from '../../../../shared/LikeMiniIcon/LikeMiniIcon'
import Avatar from '../../../../shared/Avatar/Avatar'
import image from '../../../../temporaryImages/abstraktsiia.jpg'
import Typography from '@material-ui/core/Typography'
import { Hidden } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import SharedButton from '../../../../shared/Button/SharedButton'
import TemporaryAvatar from '../../../../temporaryImages/avatar.jpg'
import ThreeDots from '../../../../shared/ThreeDots/TreeDots'
import SmallDot from '../../../../shared/SmallDot/SmallDot'
import Comment from './Comment/Comment'

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
  const [showedAddComment, setShowedAddComment] = useState(false)
  const [commentValue, setCommentValue] = useState('')

  const handleCommentInputChange = e => {
    let commentInputVal = e.currentTarget.value
    setCommentValue(commentInputVal)
  }

  return (
    <div className={classes.post}>
      <div className={classes.hiddenMenu}>
        <ThreeDots/>
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
          <Typography variant="body2" className={classes.time}>
            {postTime}
            <SmallDot/>
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
        <SmallDot/>
        <Typography variant="body2" className={classes.quantityText}>
          {quantityOfComments} comments
        </Typography>
        <SmallDot/>
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
        <div className={classes.item} onClick={() => setShowedAddComment(!showedAddComment)}>
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
      <div className={showedAddComment ? classes.showedAddComment : classes.hiddenAddComment}>
        <div className={classes.addComment}>
          <div className={classes.avatar}>
            <Avatar/>
          </div>
          <InputBase
            placeholder="Add a comment..."
            fullWidth={true}
            multiline={true}
            value={commentValue}
            onChange={handleCommentInputChange}
            className={classes.commentField}/>
        </div>
      </div>
      <div className={commentValue.length > 0 ? classes.showedButton : classes.hidden}>
        <SharedButton title="Post"/>
      </div>
      <div className={showedAddComment ? classes.showedAddComment : classes.hidden}>
        <Comment/>
      </div>
    </div>
  )
}

export default Post
