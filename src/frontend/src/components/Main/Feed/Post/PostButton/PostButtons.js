import { togglePostLikeGeneralAction, togglePostLikeSingleAction } from '../../../../../redux/Post/postActions'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import { Hidden } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import TelegramIcon from '@material-ui/icons/Telegram'
import React from 'react'
import styles from './styles'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'
import NewCommentInput from './NewCommentInput/NewCommentInput'

function PostButtons (props) {
  const {postId, isLikedByActiveUser, showedAddComment, handleComment, singlePostRender} = props

  const classes = styles()

  const dispatch = useDispatch()

  const handleLikeGeneral = () => {
    dispatch(togglePostLikeGeneralAction(postId))
  }

  const handleLikeSingle = () => {
    dispatch(togglePostLikeSingleAction(postId))
  }

  const handleLike = singlePostRender ? handleLikeSingle : handleLikeGeneral

  const handleShare = () => {
    // TODO: handleShare
  }

  const handleSend = () => {
    // TODO: handleSend
  }

  const items = [
    { icon: <ThumbUpOutlinedIcon fontSize="inherit"/>, title: 'Like', onClick: handleLike, className: clsx(classes.item, isLikedByActiveUser && classes.liked) },
    { icon: <ChatOutlinedIcon fontSize="inherit"/>, title: 'Comment', onClick: handleComment, className: classes.item },
    { icon: <RedoOutlinedIcon fontSize="inherit"/>, title: 'Share', onClick: handleShare, className: classes.item },
    { icon: <TelegramIcon fontSize="inherit"/>, title: 'Send', onClick: handleSend, className: classes.item }
  ]

  return (
    <div className={classes.postButtonsWrapper}>
      <div className={classes.block}>
        {items.map(({ icon, title, onClick, className }, i) => (
          <div key={i} className={className} onClick={onClick}>
            {icon}
            <Hidden xsDown>
              <span>{title}</span>
            </Hidden>
          </div>
        ))}
      </div>
      <div className={showedAddComment ? classes.showedAddComment : classes.hidden}>
        <NewCommentInput postId={postId}/>
      </div>
    </div>
  )
}

export default PostButtons
