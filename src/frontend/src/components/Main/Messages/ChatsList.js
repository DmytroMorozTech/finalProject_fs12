import React, { useEffect } from 'react'
import Style from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { chatMessages } from '../../../redux/Message/messageSelector'
import { getChatMessagesAction } from '../../../redux/Message/messageActions'
import Image from '../../../shared/Image/Image'

function ChatsList (props) {
  const { user, chatId, activeUserId } = props
  const { avatarPublicId, firstName, fullName } = user
  const classes = Style()
  const userChatMessages = useSelector(chatMessages)
  const dispatch = useDispatch()
  console.log('chat id: ' + chatId)

  useEffect(() => {
    dispatch(getChatMessagesAction(chatId))
  }, [dispatch, chatId])
  const allChatMessages = userChatMessages && userChatMessages[chatId]

  const chatMessagesLength = allChatMessages && allChatMessages.length - 1

  function getSenderName () {
    return allChatMessages && allChatMessages[chatMessagesLength].userId === activeUserId ? 'You' : firstName
  }

  function getLastChatMessage () {
    return allChatMessages && chatMessagesLength && allChatMessages[chatMessagesLength].text
  }

  function getMessageSentTime () {
    return allChatMessages && chatMessagesLength && getDateTitle(allChatMessages[chatMessagesLength].createdDate)
  }

  const getDateTitle = (time) => {
    const localTime = new Date()
    switch (true) {
      case localTime.getFullYear() === +time.split('T')[0].split('-')[0] && +time.split('T')[0].split('-')[2] !== localTime.getDate():
        return time.split('T')[1].split('.')[2] + '.' + time.split('T')[1].split('.')[1]
      case localTime.getDate() !== +time.split('T')[0].split('-')[2] && localTime.getFullYear() !== +time.split('T')[0].split('-')[0]:
        return time.split('T')[0].split('-')[2] + ' ' + getMonthText(time.split('T')[0].split('-')[1]) + ' ' + time.split('T')[0].split('-')[0]
      default:
        const splitDate = time.split('T')[1].split('.')[0].split(':').slice(0, 2)
        return splitDate[0] + ':' + splitDate[1]
    }
  }

  const getMonthText = (date) => {
    switch (date) {
      case '01':
        return 'jan'
      case '02':
        return 'feb'
      case '03':
        return 'mar'
      case '04':
        return 'apr'
      case '05':
        return 'may'
      case '06':
        return 'jun'
      case '07':
        return 'jul'
      case '08':
        return 'aug'
      case '09':
        return 'sep'
      case '10':
        return 'oct'
      case '11':
        return 'nov'
      case '12':
        return 'dec'
      default:
        return 'incorrect data'
    }
  }

  return (

    <div>
      <ul className={classes.containerConversationsList}>
        <li className={classes.containerConvoItem}>
          <div className={classes.dFlex}>

            <div className={classes.selectableEntity}>
              <div className={classes.absolut}>
                <Image
                  imageUrl={avatarPublicId}
                  alt={fullName}
                  className={classes.userAvatar}
                  type={'extraSmallAvatar'}
                />
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
                  <p className={classes.conversationCardMessageSnippet}>
                    <span>{getSenderName()} :  &laquo;{getLastChatMessage()}&raquo;</span>
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