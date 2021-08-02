import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import TelegramIcon from '@material-ui/icons/Telegram'
import Style from './styles'
import React, { useState } from 'react'
import LikeMiniIcon from '../../../../shared/LikeMiniIcon/LikeMiniIcon'
import Avatar from '../../../../shared/Avatar/Avatar'
import Typography from '@material-ui/core/Typography'
import { Hidden } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import SharedButton from '../../../../shared/Button/SharedButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import TemporaryAvatar from '../../../../temporaryImages/avatar.jpg'
import ThreeDots from '../../../../shared/ThreeDots/TreeDots'
import SmallDot from '../../../../shared/SmallDot/SmallDot'
import {useSelector} from 'react-redux'
import {activeUserSelector} from '../../../../redux/User/userSelector'

function Post (props) {
//   {
//   userName = 'Steve Noiry',
//   position = 'Java Developer',
//   postTime = '1h',
//   text = 'This text in Post was generated automatically!',
//   picture = image,
//   quantityOfLikes = 10595,
//   quantityOfComments = 420,
//   quantityOfViews = 244688
// })

  const activeUser = useSelector(activeUserSelector)
  
  const {
    id, text, user, createdDate, numberOfLikes, numberOfComments, numberOfViews = 244688
  } = props.post

  // so fat this data is hardcoded, but we will soon connect it to the backend
  const {
    commentAvatar = TemporaryAvatar,
    commentUserName = 'Peter Walker',
    commentUserJobPosition = 'JavaScript Developer',
    commentText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, urna sed suscipit posuere, velit.',
    commentTime = '4d',
    quantityOfCommentsLike = 1
  } = props

  const classes = Style()
  const [liked, setLiked] = useState(false)
  const [showedAddComment, setShowedAddComment] = useState(false)
  const [commentValue, setCommentValue] = useState('')

  const handleCommentInputChange = e => {
    let commentInputVal = e.currentTarget.value
    setCommentValue(commentInputVal)
  }

  const [commentLiked, setCommentLiked] = useState(false)

  return (
    <div className={classes.post}>
      <div className={classes.hiddenMenu}>
        <ThreeDots/>
      </div>
      <hr className={classes.line}/>
      <div className={classes.postAuthor}>
        <Avatar avatarUrl={user.avatarUrl}/>
        <div className={classes.userInfo}>
          <Typography variant="body1" className={classes.name}>
            {user.fullName}
          </Typography>
          <Typography variant="body2" className={classes.position}>
            {user.positionAndCompany}
          </Typography>
          <Typography variant="body2" className={classes.postTime}>
            {createdDate}
            {/* <SmallDot/> */}
            {/* <div className={classes.worldIcon}> */}
            {/*  <PublicIcon/> */}
            {/* </div> */}
          </Typography>
        </div>
      </div>
      <Typography variant="body1" gutterBottom className={classes.text}>
        {text}
      </Typography>
      {/* <div> */}
      {/*  <img src={user.avatarUrl} alt={user.avatarUrl} className={classes.picture}/> */}
      {/* </div> */}
      <div className={classes.quantity}>
        <Typography variant="body2" className={classes.quantityText}>
          <LikeMiniIcon/>
          {numberOfLikes}
        </Typography>
        <SmallDot/>
        <Typography variant="body2" className={classes.quantityText}>
          {numberOfComments} comments
        </Typography>
        <SmallDot/>
        <Typography variant="body2" className={classes.quantityText}>
          {numberOfViews} views
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
        <div className={classes.comments}>
          <div className={classes.comment}>
            <div>
              <img src={commentAvatar} alt={'comment avatar'} className={classes.commentAvatar}/>
            </div>
            <div>
              <div className={classes.commentBackground}>
                <div className={[classes.commentRow, classes.commentHeader].join(' ')}>
                  <div className={classes.commentColumn}>
                    <Typography variant="body1" className={[classes.name, classes.commentUserInfo].join(' ')}>
                      {commentUserName}
                    </Typography>
                    <Typography variant="body2" className={[classes.position, classes.commentUserInfo].join(' ')}>
                      {commentUserJobPosition}
                    </Typography>
                  </div>
                  <div className={classes.commentRow}>
                    <div className={classes.time}>{commentTime}</div>
                    <div className={classes.dots}><MoreHorizIcon/></div>
                  </div>
                </div>
                <Typography variant="body1" gutterBottom className={classes.commentText}>
                  {commentText}
                </Typography>
              </div>
              <div className={classes.commentLikes}>
                <span
                  className={commentLiked ? [classes.commentLike, classes.commentLiked].join(' ') : [classes.commentLike, classes.commentNotLiked].join(' ')}
                  onClick={() => setCommentLiked(!commentLiked)}>Like</span>
                <span
                  className={quantityOfCommentsLike === 0 ? [classes.hiddenQuantityOfCommentsLike, classes.commentRow].join(' ') : classes.commentRow}>
                  <SmallDot/>
                  <span className={classes.quantityOfCommentsLike}><LikeMiniIcon/>{quantityOfCommentsLike}</span>
                </span>
              </div>
            </div>
          </div>
          <div className={classes.loadMoreComments}>
            <span>Load more comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
