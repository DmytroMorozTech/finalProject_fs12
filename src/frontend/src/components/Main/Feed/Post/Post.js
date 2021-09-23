import PublicIcon from '@material-ui/icons/Public'
import styles from './styles'
import React, { useState } from 'react'
import LikeMiniIcon from '../../../../shared/LikeMiniIcon/LikeMiniIcon'
import Typography from '@material-ui/core/Typography'
import ThreeDots from '../../../../shared/ThreeDots/TreeDots'
import SmallDot from '../../../../shared/SmallDot/SmallDot'
import { useDispatch } from 'react-redux'
import { getUsersWhoLikedPostAction } from '../../../../redux/Post/postActions'
import getTimeSinceCreated from '../../../../services/timePassedServiceShort'
import PostButtons from './PostButton/PostButtons'
import SeeMore from './SeeMore/SeeMore'
import SimpleMenu from '../../../../shared/PopupMenu/PopupMenu'
import PostAddition from './PostAddition/PostAddition'
import { Link } from 'react-router-dom'
import Image from '../../../../../src/shared/Image/Image'
import { getCommentsForPostAction } from '../../../../redux/Comment/commentActions'
import VideoPlayerClass from './Video/VideoPlayerClass'

function Post (props) {
  const {
    id: postId, isLikedByActiveUser, isBookmarkedByActiveUser, text, user, createdDate, numberOfLikes, numberOfComments,
    imgPublicId, videoPublicId } = props.post

  const cloudName = 'dan-insta-step'
  const videoPublicIdFinal = videoPublicId.replaceAll('/', '%2F')
  const videoOptions = { cloudName: cloudName, publicId: videoPublicId, uniqueIdentifier: videoPublicIdFinal }
  // const videoOptions = { cloudName: 'demo', publicId: 'race_road_car' }

  const dispatch = useDispatch()
  const classes = styles()
  const linkToUserProfile = '/profiles/' + user.id
  const [showedAddComment, setShowedAddComment] = useState(false)

  const handleComment = () => {
    if (!showedAddComment) {
      dispatch(getCommentsForPostAction(postId))
      setShowedAddComment(!showedAddComment)
    }
  }

  return (
    <div className={classes.post}>
      <div className={classes.hiddenMenu}>
        <SimpleMenu menuItem={
          <ThreeDots/>
        } userData={<PostAddition postId={postId} isBookmarkedByActiveUser={isBookmarkedByActiveUser}/>}/>
      </div>
      <hr className={classes.line}/>
      <div className={classes.postAuthor}>
        <Link to={linkToUserProfile}>
          <Image
            imageUrl={user.avatarPublicId}
            alt={'user avatar'}
            type={'smallAvatar'}
            className={classes.mediumAvatar}
          />
        </Link>
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

      {imgPublicId &&
      (<Image
        imageUrl={imgPublicId}
        className={classes.postImage}
        alt={`Image for post with id: ${postId}`}
        type={'postImg'}
      />)
      }

      {videoPublicId &&
      (
        <div className={classes.videoWrapper} key={videoPublicId}>
          <VideoPlayerClass options={videoOptions} />
        </div>
      )

      }

      <div className={classes.quantity}>
        {numberOfLikes > 0
          ? <div onClick={() => dispatch(getUsersWhoLikedPostAction(postId))}>
            <Typography variant="body2" className={classes.quantityText}>
              <LikeMiniIcon/>
              {numberOfLikes}
            </Typography>
          </div>
          : ''
        }
        {numberOfLikes > 0 && numberOfComments > 0
          ? <SmallDot/>
          : ''
        }
        {numberOfComments > 0
          ? <Typography variant="body2" className={classes.quantityText} onClick={handleComment}>
            {numberOfComments} comments
          </Typography>
          : ''
        }
      </div>
      <hr className={classes.line}/>
      <PostButtons
        postId={postId}
        isLikedByActiveUser={isLikedByActiveUser}
        showedAddComment={showedAddComment}
        handleComment={handleComment}
      />
    </div>
  )
}

export default Post
