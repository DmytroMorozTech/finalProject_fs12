import Typography from '@material-ui/core/Typography'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SmallDot from '../../../../../shared/SmallDot/SmallDot'
import LikeMiniIcon from '../../../../../shared/LikeMiniIcon/LikeMiniIcon'
import React, { useState } from 'react'
import Style from './styles'

// function Comment ({
//   commentAvatar = TemporaryAvatar,
//   commentUserName = 'Peter Walker',
//   commentUserJobPosition = 'JavaScript Developer',
//   text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, urna sed suscipit posuere, velit. ',
//   commentTime = '4d',
//   quantityOfCommentsLike = 1
// }) {

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
              <Typography variant="body1" className={[classes.name, classes.commentUserInfo].join(' ')}>
                {fullName}
              </Typography>
              <Typography variant="body2" className={[classes.position, classes.commentUserInfo].join(' ')}>
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
            className={commentLiked ? [classes.commentLike, classes.commentLiked].join(' ') : [classes.commentLike, classes.commentNotLiked].join(' ')}
            onClick={() => setCommentLiked(!commentLiked)}>Like</span>
          <span className={quantityOfCommentsLike === 0 ? [classes.hiddenQuantityOfCommentsLike, classes.commentRow].join(' ') : classes.commentRow}>
            <SmallDot/>
            <span className={classes.quantityOfCommentsLike}><LikeMiniIcon/>{quantityOfCommentsLike}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Comment
