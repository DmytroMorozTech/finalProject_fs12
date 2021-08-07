import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import TelegramIcon from '@material-ui/icons/Telegram'
import PublicIcon from '@material-ui/icons/Public'
import Style from './styles'
import React, { useState } from 'react'
import LikeMiniIcon from '../../../../shared/LikeMiniIcon/LikeMiniIcon'
import Avatar from '../../../../shared/Avatar/Avatar'
import Typography from '@material-ui/core/Typography'
import { Hidden } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import SharedButton from '../../../../shared/Button/SharedButton'
import ThreeDots from '../../../../shared/ThreeDots/TreeDots'
import SmallDot from '../../../../shared/SmallDot/SmallDot'
import { useDispatch, useSelector } from 'react-redux'
import { createNewCommentAction, getCommentsForPostAction, toggleLikeAction, getUsersWhoLikedPostAction } from '../../../../redux/Post/postActions'
import { useDispatch } from 'react-redux'
import { createNewCommentAction, getCommentsForPostAction, toggleLikeAction } from '../../../../redux/Post/postActions'
import { getUsersWhoLikedPostAction } from '../../../../redux/User/userActions'
import Comment from './Comment/Comment'
import { allCommentsSelector } from '../../../../redux/Post/postSelector'

function Post (props) {
  const {
    id, isLikedByActiveUser, text, user, createdDate, numberOfLikes, numberOfComments,
    numberOfViews = 244688
  } = props.post

  const dispatch = useDispatch()
  const allComments = useSelector(allCommentsSelector)
  // we get all comments from Redux store using useSelector
  const commentsForPost = allComments[id] || []
  // we get from Redux an array of Comments for a particular Post by postId

  const classes = Style()
  const [showedAddComment, setShowedAddComment] = useState(false)
  const [commentValue, setCommentValue] = useState('')

  const handleCommentInputChange = e => {
    let commentInputVal = e.currentTarget.value
    setCommentValue(commentInputVal)
  }

  const handleEnterPressed = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      handleButtonPost()
    }
  }

  const handleButtonPost = () => {
    dispatch(createNewCommentAction({ text: commentValue, id: id }))
    setCommentValue('')
  }

  return (
    <div className={classes.post}>
      <div className={classes.hiddenMenu}>
        <ThreeDots/>
      </div>
      <hr className={classes.line}/>
      <div className={classes.postAuthor}>
        <div className={classes.mediumAvatar}>
          <Avatar avatarUrl={user.avatarUrl}/>
        </div>
        <div className={classes.userInfo}>
          <Typography variant="h5" className={classes.name}>
            {user.fullName}
          </Typography>
          <Typography variant="h6">
            {user.positionAndCompany}
          </Typography>
          <Typography variant="h6" className={classes.time}>
            {createdDate}
            <SmallDot/>
            <div className={classes.worldIcon}>
              <PublicIcon fontSize="inherit"/>
            </div>
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
        <div onClick={() => dispatch(getUsersWhoLikedPostAction(id))}>
          <Typography variant="body2" className={classes.quantityText}>
            <LikeMiniIcon/>
            {numberOfLikes}
          </Typography>
        </div>
        <SmallDot/>
        <Typography variant="body2" className={classes.quantityText}>
          {commentsForPost.length > 0 ? commentsForPost.length : numberOfComments} comments
        </Typography>
        <SmallDot/>
        <Typography variant="body2" className={classes.quantityText}>
          {numberOfViews} views
        </Typography>
      </div>
      <hr className={classes.line}/>
      {/* -------  We should move the component below into a separate react Component */}
      <div className={classes.block}>
        <div className={isLikedByActiveUser ? classes.liked : ''}>
          <div className={classes.item} onClick={() => dispatch(toggleLikeAction(id))}>
            <ThumbUpOutlinedIcon fontSize="inherit"/>
            <Hidden xsDown>
              <span className="like">Like</span>
            </Hidden>
          </div>
        </div>
        <div className={classes.item} onClick={() => {
          if (!showedAddComment) {
            dispatch(getCommentsForPostAction(id))
            setShowedAddComment(!showedAddComment)
          }
        }}>
          <ChatOutlinedIcon fontSize="inherit"/>
          <Hidden xsDown>
            <span>Comment</span>
          </Hidden>
        </div>
        <div className={classes.item}>
          <RedoOutlinedIcon fontSize="inherit"/>
          <Hidden xsDown>
            <span>Share</span>
          </Hidden>
        </div>
        <div className={classes.item}>
          <TelegramIcon fontSize="inherit"/>
          <Hidden xsDown>
            <span>Send</span>
          </Hidden>
        </div>
      </div>
      {/* -------  */}
      <div className={showedAddComment ? classes.showedAddComment : classes.hidden}>
        <div className={classes.addComment}>
          <div className={classes.smallAvatar}>
            <Avatar avatarUrl={user.avatarUrl}/>
          </div>
          <div className={classes.newComment}>
            <InputBase
              placeholder="Add a comment..."
              multiline={true}
              value={commentValue}
              onChange={handleCommentInputChange}
              className={classes.commentField}
              id="input"
              autoFocus={true}
              onKeyDown={handleEnterPressed}
            />
            <div className={commentValue.length > 0 ? classes.showedButton : classes.hidden} onClick={handleButtonPost}>
              <SharedButton title="Post"/>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.comments}>
            {commentsForPost.map(comment => <Comment key={comment.id} comment={comment}/>)}
            <div className={classes.loadMoreComments}>
              <span>Load more comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
