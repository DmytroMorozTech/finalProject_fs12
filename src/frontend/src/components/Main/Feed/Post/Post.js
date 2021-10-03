import PublicIcon from '@material-ui/icons/Public'
import styles from './styles'
import React, { useCallback, useState } from 'react'
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
import VideoPlayerClass from './Video/VideoPlayerClass'
import * as commentActions from '../../../../redux/Comment/commentActionTypes'
import http from '../../../../services/httpService'
import NewCommentInput from './PostButton/NewCommentInput/NewCommentInput'

function Post (props) {
  const {
    id: postId, isLikedByActiveUser, isBookmarkedByActiveUser,
    text, user, createdDate, numberOfLikes, numberOfComments, imgPublicId, videoPublicId
  } = props.post

  const {singlePostRender = false} = props

  const cloudName = 'dan-insta-step'
  const uniqueIdentifier = videoPublicId.replaceAll('/', '_')
  const videoOptions = { cloudName: cloudName, publicId: videoPublicId, uniqueIdentifier: uniqueIdentifier }

  const dispatch = useDispatch()
  const classes = styles()
  const linkToUserProfile = '/profiles/' + user.id
  const [commentsSectionIsVisible, setCommentsSectionIsVisible] = useState(false)

  const showCommentsSectionsHandler = () => {
    if (!commentsSectionIsVisible) {
      loadCommentsPaginated()
      setCommentsSectionIsVisible(true)
    }
  }

  const initialPaginationData = {
    pageNumber: 0,
    pageSize: 3,
    totalPages: 0,
    hasMore: true
  }

  const [paginationData, setPaginationData] = useState(initialPaginationData)

  const loadCommentsPaginated = useCallback(() => {
    return http
      .get(`api/comments/for_post/${postId}`,
        {
          params: {
            pageNumber: paginationData.pageNumber,
            pageSize: paginationData.pageSize
          }
        }
      )
      .then((result) => {
        let comments = result.data
        const {pagenumber, pagesize, totalpages, hasmore} = result.headers
        setPaginationData({
          pageNumber: parseInt(pagenumber) + 1,
          pageSize: parseInt(pagesize),
          totalPages: parseInt(totalpages),
          hasMore: hasmore === 'true'
        })
        dispatch({ type: commentActions.SAVE_COMMENTS_FOR_POST, payload: { comments, postId } })
      })
  }, [paginationData.pageNumber, paginationData.pageSize, dispatch, postId])

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
          <VideoPlayerClass options={videoOptions}/>
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
          ? <Typography variant="body2" className={classes.quantityText} onClick={showCommentsSectionsHandler}>
            {numberOfComments} comments
          </Typography>
          : ''
        }
      </div>
      <hr className={classes.line}/>
      <PostButtons
        postId={postId}
        isLikedByActiveUser={isLikedByActiveUser}
        handleComment={showCommentsSectionsHandler}
        singlePostRender={singlePostRender}
      />

      <div className={commentsSectionIsVisible ? classes.showedAddComment : classes.hidden}>
        <NewCommentInput
          postId={postId}
          postHasMoreComments={paginationData.hasMore}
          onCommentsLoadHandler = {loadCommentsPaginated}
        />
      </div>

    </div>
  )
}

export default Post
