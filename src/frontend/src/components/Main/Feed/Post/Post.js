import PublicIcon from '@material-ui/icons/Public'
import styles from './styles'
import React from 'react'
import LikeMiniIcon from '../../../../shared/LikeMiniIcon/LikeMiniIcon'
import Avatar from '../../../../shared/Avatar/Avatar'
import Typography from '@material-ui/core/Typography'
import ThreeDots from '../../../../shared/ThreeDots/TreeDots'
import SmallDot from '../../../../shared/SmallDot/SmallDot'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersWhoLikedPostAction } from '../../../../redux/Post/postActions'
import { allCommentsSelector } from '../../../../redux/Comment/commentSelector'
import getTimeSinceCreated from '../../../../services/timePassedService'
import PostButtons from './PostButton/PostButtons'
import SeeMore from './SeeMore/SeeMore'
import SimpleMenu from '../../../../shared/PopupMenu/PopupMenu'
import PostAddition from './PostAddition/PostAddition'
import { Link } from 'react-router-dom'
import { Image, Transformation } from 'cloudinary-react'

function Post (props) {
  const {
    id: postId, isLikedByActiveUser, isBookmarkedByActiveUser, text, user, createdDate, numberOfLikes, numberOfComments,
    numberOfViews = 244688, imgUrl
  } = props.post

  const dispatch = useDispatch()
  const allComments = useSelector(allCommentsSelector)
  // const activeUser = useSelector(activeUserSelector)
  // we get all comments from Redux store using useSelector
  const commentsForPost = allComments[postId] || []
  // we get from Redux an array of Comments for a particular Post by postId

  const classes = styles()

  const linkToUserProfile = '/profiles/' + user.id

  return (
    <div className={classes.post}>
      <div className={classes.hiddenMenu}>
        <SimpleMenu menuItem={
          <ThreeDots/>
        } userData={<PostAddition postId={postId} isBookmarkedByActiveUser={isBookmarkedByActiveUser}/>}/>
      </div>
      <hr className={classes.line}/>
      <div className={classes.postAuthor}>
        <div className={classes.mediumAvatar}>
          <Link to={linkToUserProfile}>
            <Avatar avatarUrl={user.avatarUrl}/>
          </Link>
        </div>
        <div className={classes.userInfo}>
          <Link to={linkToUserProfile} className={classes.link}>
            <Typography variant="h5" className={classes.name}>
              {user.fullName}
            </Typography>
          </Link>
          <Typography variant="h6">
            {user.positionAndCompany}
          </Typography>
          <Typography variant="h6" className={classes.time}>
            {getTimeSinceCreated(createdDate)}
            <SmallDot/>
            <div className={classes.worldIcon}>
              <PublicIcon fontSize="inherit"/>
            </div>
          </Typography>
        </div>
      </div>
      <Typography variant="body1" gutterBottom className={classes.text}>
        <SeeMore numberOfLimitChar={200}>
          {text}
        </SeeMore>
      </Typography>

      <Image
        key = {imgUrl}
        publicId = {imgUrl}
        crop = "crop"
      >
        <Transformation
          // height="160"
          width="500"
          crop="fill"
          // gravity="face"
          quality="90"
        />
      </Image>
      {/* TODO: unify in one element */}

      <div className={classes.quantity}>
        <div onClick={() => dispatch(getUsersWhoLikedPostAction(postId))}>
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
      <PostButtons
        postId={postId}
        isLikedByActiveUser={isLikedByActiveUser}
        isBookmarkedByActiveUser={isBookmarkedByActiveUser}
      />
    </div>
  )
}

export default Post
