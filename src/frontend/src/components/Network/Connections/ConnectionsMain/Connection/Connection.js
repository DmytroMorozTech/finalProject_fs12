import styles from './styles'
import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import SharedButton from '../../../../../shared/SharedButton/SharedButton'
import TreeDots from '../../../../../shared/ThreeDots/TreeDots'
import { Link } from 'react-router-dom'
import SimpleMenu from '../../../../../shared/PopupMenu/PopupMenu'
import ConnectionAddition from './ConnectionAddition/ConnectionAddition'
import { useDispatch, useSelector } from 'react-redux'

import { getUserChatsAction, isTemporaryChatOpenAction } from '../../../../../redux/Message/messageActions'
import Image from '../../../../../shared/Image/Image'

import { allChats } from '../../../../../redux/Message/messageSelector'
import { activeUserSelector } from '../../../../../redux/User/userSelector'
import getTimeSinceCreated from '../../../../../services/timePassedServiceFull'
import { deleteConnectionAction } from '../../../../../redux/Network/networkActions'

function Connection (props) {
  const classes = styles()
  const dispatch = useDispatch()
  const chats = useSelector(allChats)
  const activeUser = useSelector(activeUserSelector)
  const activeUserId = activeUser && activeUser.id

  const {id, avatarPublicId, fullName, positionAndCompany, createdDate} = props.connection
  const timeSinceCreated = getTimeSinceCreated(createdDate)

  useEffect(() => {
    dispatch(getUserChatsAction(activeUserId))
  }, [dispatch, id, activeUserId])

  const handleRemoved = () => {
    dispatch(deleteConnectionAction(activeUserId, id))
  }

  const findIfChatExist = () => {
    dispatch(isTemporaryChatOpenAction(false))
    let existingChatId = null
    chats && chats.forEach(c => {
      if (c.users.filter(u => u.id === id).length > 0) {
        existingChatId = c.id
      }
    })

    const chatId = existingChatId !== null ? existingChatId : `new/${id}`
    return chatId
  }

  return (
    <div>
      <div>
        <div className={classes.connection}>
          <div className={classes.flex}>
            <Link to={`/profiles/${id}`}>
              <Image
                imageUrl={avatarPublicId}
                alt={'user avatar'}
                className={classes.avatar}
                type={'largeAvatar'}
              />
            </Link>
            <div className={classes.userInfo}>
              <Link to={`/profiles/${id}`} className={classes.link}>
                {fullName}
              </Link>
              <Typography variant="body1" color="textSecondary">
                {positionAndCompany}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Connected {timeSinceCreated} ago
              </Typography>
            </div>
          </div>
          <div className={classes.buttons}>
            <div className={classes.button}>
              <Link className={classes.linkButton} key={id} to={`/chat/${findIfChatExist()}`}>
                <SharedButton title="Message" size="medium" variant="outlined" />
              </Link>
            </div>
            <div>
              <SimpleMenu menuItem={
                <TreeDots/>
              } userData={<ConnectionAddition onClick={handleRemoved}/>}/>
            </div>
          </div>
        </div>
      </div>
      <hr className={classes.line}/>
    </div>
  )
}

export default Connection
