import styles from './styles'
import Avatar from '../../../../../shared/Avatar/Avatar'
import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography'
import SharedButton from '../../../../../shared/Button/SharedButton'
import TreeDots from '../../../../../shared/ThreeDots/TreeDots'
import {Link, NavLink} from 'react-router-dom'
import SimpleMenu from '../../../../../shared/PopupMenu/PopupMenu'
import ConnectionAddition from './ConnectionAddition/ConnectionAddition'
import {useDispatch, useSelector} from 'react-redux'
import {createChatAction, getUserChatsAction} from '../../../../../redux/Message/messageActions'
import {allChats, newChatData} from '../../../../../redux/Message/messageSelector'
import {activeUserSelector} from '../../../../../redux/User/userSelector'

function Connection (props) {
  const classes = styles()
  const dispatch = useDispatch()
  const chats = useSelector(allChats)
  const activeUser = useSelector(activeUserSelector)
  const activeUserId = activeUser && activeUser.id
  const activeChat = chats[0] && chats[0].id
  const newChat = useSelector(newChatData)
  console.log('user chats: ' + chats)

  const {
    id = 3,
    avatarUrl = 'https://res.cloudinary.com/dan-insta-step/image/upload/v1628417806/linkedin/avatars/p1qwriz6hzjgwkaihwpa.jpg',
    fullName = 'Laura Lee',
    positionAndCompany = 'Sales manager at Microsoft',
    dateCreated = '3 days ago'
  } = props

  useEffect(() => {
    dispatch(getUserChatsAction(id && id))
  }, [dispatch, id])

  const [removedConnection, setRemovedConnection] = useState(false)

  const handleRemoved = () => {
    setRemovedConnection(!removedConnection)
  }

  const findIfChatExist = () => {
    let existChatId = ''
    chats && chats.forEach(c => {
      if (c.users.filter(u => u.id === activeUserId).length > 0) {
        existChatId = c.id
      } else existChatId = null
    })
    console.log('Chat exist: ' + existChatId)
    return existChatId !== null ? existChatId : 'new/' + id
  }

  const startNewChatting = () => {
    dispatch(createChatAction())
    const newChatId = newChat && newChat.id
    console.log('New chat id: ' + newChatId)
    return newChatId
  }

  return (
    <div className={removedConnection ? classes.removed : ''}>
      <div>
        <div className={classes.connection}>
          <div className={classes.flex}>
            <Link to={`/profiles/${id}`}>
              <div className={classes.avatar}>
                <Avatar avatarUrl={avatarUrl}/>
              </div>
            </Link>
            <div className={classes.userInfo}>
              <Link to={`/profiles/${id}`} className={classes.link}>
                {fullName}
              </Link>
              <Typography variant="body1" color="textSecondary">
                {positionAndCompany}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Connected {dateCreated}
              </Typography>
            </div>
          </div>
          <div className={classes.buttons}>
            <div className={classes.button}>
              <NavLink className={`${classes.linkButton}`} key={id} to={`/chat/${findIfChatExist()}`}>
                <SharedButton component={NavLink} title="Message" size="medium" variant="outlined" />
              </NavLink>
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
