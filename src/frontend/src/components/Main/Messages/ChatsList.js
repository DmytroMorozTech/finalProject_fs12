import React, {useEffect} from 'react'
import Style from './styles'
import {useDispatch, useSelector} from 'react-redux'
import {chatMessages} from '../../../redux/Message/messageSelector'
import {getChatMessagesAction} from '../../../redux/Message/messageActions'

function ChatsList (props) {
  const {user, chatId, activeUserId} = props
  const {avatarUrl, firstName, fullName} = user
  const classes = Style()
  const userChatMessages = useSelector(chatMessages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getChatMessagesAction(chatId))
  }, [])
  const allChatMessages = userChatMessages[chatId]

  const chatMessagesLength = allChatMessages && allChatMessages.length - 1

  function getSenderName () {
    return allChatMessages && allChatMessages[chatMessagesLength].userId === activeUserId ? 'You' : firstName
  }

  function getLastChatMessage () {
    return allChatMessages && chatMessagesLength && allChatMessages[chatMessagesLength].text
  }

  function getMessageSentTime () {
    return allChatMessages && chatMessagesLength && allChatMessages[chatMessagesLength].createdDate
  }

  return (

    <div>
      <ul className={classes.containerConversationsList}>
        <li className={classes.containerConvoItem}>
          <div className={classes.dFlex}>

            <div className={classes.selectableEntity}>
              <div className={classes.absolut}>
                <img src={avatarUrl} alt={fullName} className={classes.userAvatar}/>
                <div className={classes.statusUserAvatar}/>
              </div>
            </div>

            <div className={classes.conversationCardContent}>
              <div className={`${classes.conversationCardTitleRow} ${classes.dFlex}`}>
                <div className={classes.userName}>{fullName}</div>
                <div className={classes.dataMessage}>{getMessageSentTime()}</div>
              </div>
              <div className={classes.conversationCardTitleRow}>
                <div className={classes.flexGrow2}>
                  <p className={classes.conversationCardMessageSnippet}><span>{getSenderName() + ':  ' + getLastChatMessage()}</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </li>
      </ul>
    </div>
  )
}

export default ChatsList