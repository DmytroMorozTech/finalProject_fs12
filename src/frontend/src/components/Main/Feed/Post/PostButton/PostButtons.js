import { togglePostLikeGeneralAction, togglePostLikeSingleAction } from '../../../../../redux/Post/postActions'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import { Hidden, Tooltip } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import TelegramIcon from '@material-ui/icons/Telegram'
import React, { useState } from 'react'
import styles from './styles'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'
import NewCommentInput from './NewCommentInput/NewCommentInput'
import toggleModalAction from '../../../../../redux/Modal/modalActions'
import { SEND_MESSAGE } from '../../../../../redux/Modal/modalTypes'

function PostButtons (props) {
  const {postId, isLikedByActiveUser, showedAddComment, handleComment, singlePostRender} = props

  const classes = styles()

  const dispatch = useDispatch()

  const linkToPost = 'http://localhost:3000/posts/' + postId

  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  const handleLikeGeneral = () => {
    dispatch(togglePostLikeGeneralAction(postId))
  }

  const handleLikeSingle = () => {
    dispatch(togglePostLikeSingleAction(postId))
  }

  const handleLike = singlePostRender ? handleLikeSingle : handleLikeGeneral

  const handleCopy = () => {
    navigator.clipboard.writeText(linkToPost)
    handleTooltipOpen()
  }

  const handleSend = () => {
    // dispatch(getMyConnectionsAction())
    dispatch(toggleModalAction({ modalType: SEND_MESSAGE }))
  }

  const items = [
    { icon: <ThumbUpOutlinedIcon fontSize="inherit"/>, title: 'Like', onClick: handleLike, className: clsx(classes.item, isLikedByActiveUser && classes.liked) },
    { icon: <ChatOutlinedIcon fontSize="inherit"/>, title: 'Comment', onClick: handleComment, className: classes.item },
    { icon: <RedoOutlinedIcon fontSize="inherit"/>, title: 'Copy link', onClick: handleCopy, className: classes.item },
    { icon: <TelegramIcon fontSize="inherit"/>, title: 'Send', onClick: handleSend, className: classes.item }
  ]

  return (
    <div className={classes.postButtonsWrapper}>
      <div className={classes.block}>
        {items.map(({ icon, title, onClick, className }, i) => (
          <Tooltip
            PopperProps={{
              disablePortal: true
            }}
            onClose={handleTooltipClose}
            open={title === 'Copy link' ? open : ''}
            title="Link copied"
            placement="top"
          >

            <div key={i} className={className} onClick={onClick}>
              {icon}
              <Hidden xsDown>
                <span>{title}</span>
              </Hidden>
            </div>

          </Tooltip>
        ))}
      </div>
      <div className={showedAddComment ? classes.showedAddComment : classes.hidden}>
        <NewCommentInput postId={postId}/>
      </div>
    </div>
  )
}

export default PostButtons
