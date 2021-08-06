import Typography from '@material-ui/core/Typography'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SmallDot from '../../../../../shared/SmallDot/SmallDot'
import LikeMiniIcon from '../../../../../shared/LikeMiniIcon/LikeMiniIcon'
import React, { useState } from 'react'
import Style from './styles'
import clsx from 'clsx'

function Comment (props) {
  let {user, text, quantityOfCommentsLike = 3, timePassedSinceCreated} = props.comment
  let {fullName, avatarUrl, positionAndCompany} = user

  const classes = Style()

  const [commentLiked, setCommentLiked] = useState(false)

  return (
    <div className={classes.comment}>
      <div>
        <img src={avatarUrl} alt={'comment avatar'} className={classes.commentAvatar}/>
      </div>
      <div className= {classes.commentWrapper}>
        <div className={classes.commentBackground}>
          <div className={[classes.commentRow, classes.commentHeader].join(' ')}>
            <div className={classes.commentColumn}>
              <Typography variant="h5" className={[classes.name, classes.commentUserInfo].join(' ')}>
                {fullName}
              </Typography>
              <Typography variant="h6" className={[classes.position, classes.commentUserInfo].join(' ')}>
                {positionAndCompany}
              </Typography>
            </div>
            <div className={classes.commentRow}>
              <div className={classes.time}>{timePassedSinceCreated}</div>
              <div className={classes.dots}><MoreHorizIcon/></div>
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
