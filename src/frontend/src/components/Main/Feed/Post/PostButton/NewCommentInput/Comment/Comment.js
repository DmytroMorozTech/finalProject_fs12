import Typography from '@material-ui/core/Typography'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SmallDot from '../../../../../../../shared/SmallDot/SmallDot'
import LikeMiniIcon from '../../../../../../../shared/LikeMiniIcon/LikeMiniIcon'
import React from 'react'
import styles from './styles'
import clsx from 'clsx'
import getTimeSinceCreated from '../../../../../../../services/timePassedServiceShort'
import SeeMore from '../../../SeeMore/SeeMore'
import { useDispatch } from 'react-redux'
import {
  getUsersWhoLikedCommentAction,
  toggleCommentLikeAction
} from '../../../../../../../redux/Comment/commentActions'
import { Link } from 'react-router-dom'
import Image from '../../../../../../../shared/Image/Image'

function Comment (props) {
  const { id: commentId, user, text, numberOfLikes = 0, createdDate, isLikedByActiveUser } = props.comment
  const postId = props.postId
  const { fullName, avatarPublicId, positionAndCompany } = user

  const classes = styles()
  const dispatch = useDispatch()

  const handleCommentLike = () => {
    dispatch(toggleCommentLikeAction(commentId, postId))
  }

  const handleModalWhoLikedComment = () => {
    dispatch(getUsersWhoLikedCommentAction(commentId))
  }

  const linkToUserProfile = '/profiles/' + user.id

  return (
    <div className={classes.comment}>
      <Link to={linkToUserProfile}>
        <Image
          imageUrl={avatarPublicId}
          alt={'user avatar'}
          type={'extraSmallAvatar'}
          className={classes.commentAvatar}
        />
      </Link>
      <div className={classes.commentWrapper}>
        <div className={classes.commentBackground}>
          <div className={clsx(classes.commentRow, classes.commentHeader)}>
            <div className={classes.commentColumn}>
              <Link to={linkToUserProfile} className={classes.link}>
                <Typography variant="h5" className={clsx(classes.name, classes.commentUserInfo)}>
                  {fullName}
                </Typography>
              </Link>
              <Typography variant="h6" className={classes.commentUserInfo}>
                {positionAndCompany}
              </Typography>
            </div>
            <div className={classes.commentRow}>
              <div className={classes.time}>{getTimeSinceCreated(createdDate)}</div>
              <div className={classes.dots}><MoreHorizIcon fontSize="inherit"/></div>
            </div>
          </div>
          <Typography variant="body1" gutterBottom className={classes.commentText}>
            <SeeMore>
              {text}
            </SeeMore>
          </Typography>
        </div>
        <div className={classes.commentLikes}>
          <span
            className={clsx(classes.commentLike, isLikedByActiveUser ? classes.commentLiked : classes.commentNotLiked)}
            onClick={handleCommentLike}>
            Like
          </span>
          <span
            className={clsx(classes.commentRow, numberOfLikes === 0 && classes.hiddenQuantityOfCommentsLike)}>
            <SmallDot/>
            <span className={classes.quantityOfCommentsLike} onClick={handleModalWhoLikedComment}>
              <LikeMiniIcon/>
              {numberOfLikes}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Comment
