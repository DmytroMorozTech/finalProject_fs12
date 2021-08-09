import Typography from '@material-ui/core/Typography'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SmallDot from '../../../../../shared/SmallDot/SmallDot'
import LikeMiniIcon from '../../../../../shared/LikeMiniIcon/LikeMiniIcon'
import React, { useState } from 'react'
import styles from './styles'
import clsx from 'clsx'
import Avatar from '../../../../../shared/Avatar/Avatar'
import getTimeSinceCreated from '../../../../../services/timePassedService'

function Comment (props) {
  let {user, text, quantityOfCommentsLike = 3, createdDate} = props.comment
  let {fullName, avatarUrl, positionAndCompany} = user

  const classes = styles()

  const [commentLiked, setCommentLiked] = useState(false)

  return (
    <div className={classes.comment}>
      <div className={classes.commentAvatar}>
        <Avatar avatarUrl={avatarUrl}/>
      </div>
      <div className= {classes.commentWrapper}>
        <div className={classes.commentBackground}>
          <div className={clsx(classes.commentRow, classes.commentHeader)}>
            <div className={classes.commentColumn}>
              <Typography variant="h5" className={clsx(classes.name, classes.commentUserInfo)}>
                {fullName}
              </Typography>
              <Typography variant="h6" className={classes.commentUserInfo}>
                {positionAndCompany}
              </Typography>
            </div>
            <div className={classes.commentRow}>
              <div className={classes.time}>{getTimeSinceCreated(createdDate)}</div>
              <div className={classes.dots}><MoreHorizIcon fontSize='inherit'/></div>
            </div>
          </div>
          <Typography variant="body1" gutterBottom className={classes.commentText}>
            {text}
          </Typography>
        </div>
        <div className={classes.commentLikes}>
          <span
            className={clsx(classes.commentLike, commentLiked ? classes.commentLiked : classes.commentNotLiked)}
            onClick={() => setCommentLiked(!commentLiked)}>Like</span>
          <span className={clsx(classes.commentRow, quantityOfCommentsLike === 0 && classes.hiddenQuantityOfCommentsLike)}>
            <SmallDot/>
            <span className={classes.quantityOfCommentsLike}><LikeMiniIcon/>{quantityOfCommentsLike}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Comment
