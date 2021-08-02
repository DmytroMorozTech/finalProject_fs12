import Typography from '@material-ui/core/Typography'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SmallDot from '../../../../../shared/SmallDot/SmallDot'
import LikeMiniIcon from '../../../../../shared/LikeMiniIcon/LikeMiniIcon'
import React, { useState } from 'react'
import Style from './styles'
import TemporaryAvatar from '../../../../../temporaryImages/avatar.jpg'

function Comment ({commentAvatar = TemporaryAvatar,
  commentUserName = 'Peter Walker',
  commentUserJobPosition = 'JavaScript Developer',
  commentText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, urna sed suscipit posuere, velit.',
  commentTime = '4d',
  quantityOfCommentsLike = 1}) {
  const classes = Style()

  const [commentLiked, setCommentLiked] = useState(false)

  return (
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
            <span className={commentLiked ? [classes.commentLike, classes.commentLiked].join(' ') : [classes.commentLike, classes.commentNotLiked].join(' ')} onClick={() => setCommentLiked(!commentLiked)}>Like</span>
            <span className={quantityOfCommentsLike === 0 ? [classes.hiddenQuantityOfCommentsLike, classes.commentRow].join(' ') : classes.commentRow}>
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
  )
}

export default Comment
