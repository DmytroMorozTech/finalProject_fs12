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
import { useDispatch } from 'react-redux'
import { getCommentsForPostAction, toggleLikeAction } from '../../../../redux/Post/postActions'
import { getUsersWhoLikedPostAction } from '../../../../redux/User/userActions'
import Comment from './Comment/Comment'
import toggleModalAction from '../../../../redux/Modal/modalActions'
import {ADD_NEW_POST, SHOW_USERS_WHO_LIKED_POST} from '../../../Modal/modalTypes'

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

  const dispatch = useDispatch()

  const {
    id, isLikedByActiveUser, text, user, createdDate, numberOfLikes, numberOfComments,
    numberOfViews = 244688, comments = [] } = props.post

  // so fat this data is hardcoded, but we will soon connect it to the backend

  const classes = Style()
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
        <Avatar avatarUrl={user.avatarUrl}/>
        <div className={classes.userInfo}>
          <Typography variant="body1" className={classes.name}>
            {user.fullName}
          </Typography>
          <Typography variant="body2" className={classes.position}>
            {user.positionAndCompany}
          </Typography>
          <Typography variant="body2" className={classes.time}>
            {createdDate}
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
      {/* <div> */}
      {/*  <img src={user.avatarUrl} alt={user.avatarUrl} className={classes.picture}/> */}
      {/* </div> */}
      <div className={classes.quantity}>
        <div onClick={async () => {
          dispatch(getUsersWhoLikedPostAction(id)) // we received data from backend and saved it to Redux

          setTimeout(
            dispatch(toggleModalAction({modalType: SHOW_USERS_WHO_LIKED_POST, postId: id})),
            1000)
        }
        }>
          <Typography variant="body2" className={classes.quantityText}>
            <LikeMiniIcon/>
            {numberOfLikes}
          </Typography>
        </div>
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
      {/* -------  We should move the component below into a separate react Component */}
      <div className={classes.block}>
        <div className={isLikedByActiveUser ? classes.liked : ''}>
          <div className={classes.item} onClick={() => dispatch(toggleLikeAction(id))}>
            <ThumbUpOutlinedIcon/>
            <Hidden xsDown>
              <span className="like">Like</span>
            </Hidden>
          </div>
        </div>
        <div className={classes.item} onClick={() => {
          dispatch(getCommentsForPostAction(id))
          setTimeout(() => setShowedAddComment(!showedAddComment), 500)
        }}>
          {/* !!! */}
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
      {/* -------  */}
      <div className={showedAddComment ? classes.showedAddComment : classes.hidden}>
        <div>
          <div className={classes.addComment}>
            <div className={classes.avatar}>
              <Avatar/>
            </div>
            <InputBase
              placeholder="Add a comment..."
              // fullWidth={true}
              multiline={true}
              value={commentValue}
              onChange={handleCommentInputChange}
              className={classes.commentField}/>
          </div>
        </div>

        <div className={commentValue.length > 0 ? classes.showedButton : classes.hidden}>
          <SharedButton title="Post" onClick={ () => { console.log('Hardcoded func') }}/>
        </div>

        <div>
          <div className={classes.comments}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

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
