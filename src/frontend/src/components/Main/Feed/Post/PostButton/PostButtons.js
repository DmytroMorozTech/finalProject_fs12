import {
  modalSendMessage,
  togglePostLikeGeneralAction,
  togglePostLikeSingleAction
} from '../../../../../redux/Post/postActions'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import { Hidden, Tooltip } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined'
import TelegramIcon from '@material-ui/icons/Telegram'
import React, { useState } from 'react'
import styles from './styles'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'

function PostButtons (props) {
  const {postId, isLikedByActiveUser, handleComment, singlePostRender} = props

  const classes = styles()

  const dispatch = useDispatch()
  const hostName = window.location.hostname
  const port = window.location.port
  const linkToPost = `${hostName}${port ? `:${port}` : ''}/posts/${postId}`

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
    copyToClipboard(linkToPost)
    handleTooltipOpen()
    setTimeout(() => handleTooltipClose(), 600)
  }

  function copyToClipboard (text) {
    if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      return window.clipboardData.setData('Text', text)
    } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      const textarea = document.createElement('textarea')
      textarea.textContent = text
      textarea.style.position = 'fixed' // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea)
      textarea.select()
      try {
        return document.execCommand('copy') // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn('Copy to clipboard failed.', ex)
        return false
      } finally {
        document.body.removeChild(textarea)
      }
    }
  }

  const handleSend = () => {
    dispatch(modalSendMessage(postId))
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
            key={i}
            PopperProps={{
              disablePortal: true
            }}
            open={title === 'Copy link' ? open : false}
            title="Link copied"
            placement="top"
          >

            <div id={title} key={i} className={className} onClick={onClick}>
              {icon}
              <Hidden xsDown>
                <span>{title}</span>
              </Hidden>
            </div>

          </Tooltip>
        ))}
      </div>
    </div>
  )
}

export default PostButtons
