import React, {useEffect} from 'react'
import Style from './styles'
import {useSelector} from 'react-redux'
import {chatMessages} from '../../../redux/Message/messageSelector'

function ChatsList (props) {
  const {user, chatId} = props
  const {avatarUrl, firstName, fullName} = user
  const classes = Style()
  const userChatMessages = useSelector(chatMessages)

  useEffect(() => {}, [userChatMessages])
  const allChatMessages = userChatMessages[chatId]

  const chatMessagesLength = allChatMessages && allChatMessages.length - 1

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
                <div className={classes.dataMessage}> '1987'</div>
              </div>
              <div className={classes.conversationCardTitleRow}>
                <div className={classes.flexGrow2}>
                  <p className={classes.conversationCardMessageSnippet}><span>{firstName + ':  ' + allChatMessages && chatMessagesLength && allChatMessages[chatMessagesLength].text}</span>
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