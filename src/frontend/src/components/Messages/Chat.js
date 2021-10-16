import React, {useEffect, useRef, useState} from 'react'
import UserMessage from './UserMessage'
import clsx from 'clsx'
import InputBase from '@material-ui/core/InputBase'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import SharedButton from '../../shared/SharedButton/SharedButton'
import styles from './styles'
import {
  createMessageAction,
  getChatMessagesAction,
  setAllChatMessagesIsViewedAction
} from '../../redux/Message/messageActions'
import {useDispatch, useSelector} from 'react-redux'
import {allChats, allMessages, chatMessages} from '../../redux/Message/messageSelector'
import {Link, withRouter} from 'react-router-dom'
import {activeUserSelector} from '../../redux/User/userSelector'
import Image from '../../shared/Image/Image'
import Picker from 'emoji-picker-react'
import useOnclickOutside from 'react-cool-onclickoutside'

function Chat (props) {
  const {match} = props
  const inputRef = useRef('')
  const {isSeparateChat} = props
  const daysAgoOnline = '4 days'
  const classes = styles()
  const [messageValue, setMessageValue] = useState('')
  const [inputIsFocused, setInputIsFocused] = useState(false)
  const dispatch = useDispatch()
  const messagesList = useSelector(allMessages)
  const userChatMessages = useSelector(chatMessages)
  const chatsList = useSelector(allChats)
  const chatIdFromUrl = match.params.id
  const activeUser = useSelector(activeUserSelector)
  let dateTitleTemporaryMemory = ''

  const [openSmileBoard, setOpenSmileBoard] = useState(false)
  const onEmojiClick = (event, emojiObject) => {
    const { selectionStart } = inputRef.current
    const newVal = messageValue.slice(0, selectionStart) + emojiObject.emoji
    setMessageValue(newVal)
  }

  const chatId = chatIdFromUrl || (chatsList[0] && chatsList[0].id)
  const currentChat = chatsList.filter(c => c.id === +chatId)[0]
  const currentChatUsers = currentChat && currentChat.users

  useEffect(() => {
    dispatch(getChatMessagesAction(chatId))
  }, [dispatch, chatId, messagesList])

  const handleMessageInputChange = e => {
    let messageInputVal = e.currentTarget.value
    setMessageValue(messageInputVal)
  }

  const handleSendMessageButton = () => {
    dispatch(setAllChatMessagesIsViewedAction(chatId))
    dispatch(createMessageAction({chatId, text: messageValue}))
    setOpenSmileBoard(false)
    setMessageValue('')
  }

  const getChatMember = () => {
    return currentChatUsers && currentChatUsers.filter(u => u.id !== activeUser.id)[0]
  }

  const getMessageSender = (userId) => {
    return currentChatUsers && currentChatUsers.filter(u => u.id === userId)[0]
  }

  const checkIfNeedToRenderDateTitle = (time) => {
    if (dateTitleTemporaryMemory === getDateTitle(time).toLowerCase().trim()) {
      return ''
    } else {
      dateTitleTemporaryMemory = getDateTitle(time).toLowerCase().trim()
      return getDateTitle(time)
    }
  }

  const getDateTitle = (time) => {
    const localTime = new Date()
    switch (true) {
      case localTime.getFullYear() === +time.split('T')[0].split('-')[0] && +time.split('T')[0].split('-')[2] !== localTime.getDate():
        return time.split('T')[1].split('.')[2] + '.' + time.split('T')[1].split('.')[1]
      case localTime.getDate() !== +time.split('T')[0].split('-')[2] && localTime.getFullYear() !== +time.split('T')[0].split('-')[0]:
        return time.split('T')[0].split('-')[2] + ' ' + getMonthText(time.split('T')[0].split('-')[1]) + ' ' + time.split('T')[0].split('-')[0]
      default:
        return time.split('T')[0].split('-')[2] + ' ' + getMonthText(time.split('T')[0].split('-')[1])
    }
  }

  const getDate = (time) => {
    const splitDate = time.split('T')[1].split('.')[0].split(':').slice(0, 2)
    return splitDate[0] + ':' + splitDate[1]
  }

  const openSmiles = () => {
    openSmileBoard === true ? setOpenSmileBoard(false) : setOpenSmileBoard(true)
  }

  const ref = useOnclickOutside(() => {
    setOpenSmileBoard(false)
  })

  const getMonthText = (date) => {
    switch (date) {
      case '01':
        return 'JANUARY'
      case '02':
        return 'FEBRUARY'
      case '03':
        return 'MARCH'
      case '04':
        return 'APRIL'
      case '05':
        return 'MAY'
      case '06':
        return 'JUNE'
      case '07':
        return 'JULY'
      case '08':
        return 'AUGUST'
      case '09':
        return 'SEPTEMBER'
      case '10':
        return 'OCTOBER'
      case '11':
        return 'NOVEMBER'
      case '12':
        return 'DECEMBER'
      default:
        return 'incorrect data'
    }
  }

  return (
    <section className={clsx(classes.messagingDetail, isSeparateChat && classes.addTopMargin)}>
      <div className={classes.scaffoldLayout}>
        <div className={classes.sharedTitleBarContainer}>
          <div className={classes.titleBar}>
            <div className={classes.entityLockup}>
              {getChatMember() && getChatMember().fullName}
              <div className={classes.userDeviceStyle}>
                <div className={classes.statusUserRight}/>
                {daysAgoOnline}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.messageListContainer}>
          <div className={classes.messageList}>
            <ul className={classes.messageListContent}>
              <li>
                <div className={classes.entityContainer}>
                  <div style={{display: 'block'}}>
                    <div className={classes.entityLockupImage}>
                      <div className={classes.presenceEntity}>
                        <Link to={`/profiles/${getChatMember() && getChatMember().id}`}>
                          <Image
                            imageUrl={getChatMember() && getChatMember().avatarPublicId}
                            alt={getChatMember() && getChatMember().fullName}
                            className={`${classes.userAvatar} ${classes.presenceEntity}`}
                            type={'extraLargeAvatar'}
                          />
                        </Link>
                        <div className={classes.presenceEntityIndicator}>

                        </div>
                      </div>
                    </div>
                    <div className={classes.entityLockupContent}>
                      <div className={classes.entityLockupTitle}>
                        <Link to={`/profiles/${getChatMember() && getChatMember().id}`} className={classes.linkMain}>
                          {getChatMember() && getChatMember().fullName}
                        </Link>
                      </div>
                      <div className={classes.entityLockupSubtitle}>
                        <div>
                          {getChatMember() && getChatMember().positionAndCompany}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={classes.chatContainer}>
                {userChatMessages[chatId] && userChatMessages[chatId].map(m => <UserMessage key={m.id}
                  messageSender={getMessageSender(m.userId)}
                  text={m.text}
                  timeTitle={checkIfNeedToRenderDateTitle(m.createdDate)}
                  timeSent={getDate(m.createdDate)}
                  isViewed={m.isViewed}
                  activeUserId={activeUser.id}
                  messageSenderId={m.userId}/>)}
              </li>
            </ul>
          </div>
          <form className={clsx(classes.msgForm, inputIsFocused ? classes.msgFormActive : '')}>
            <div className={classes.formMsgContentContainer}>
              <div className={classes.formMsgContentContainerScrollable}>
                <div className={classes.addMsg}>
                  <InputBase
                    onFocus={() => setInputIsFocused(!inputIsFocused)}
                    onBlur={() => setInputIsFocused(!inputIsFocused)}
                    placeholder="Add a message..."
                    fullWidth={true}
                    multiline={true}
                    value={messageValue}
                    onChange={handleMessageInputChange}/>
                </div>
              </div>
            </div>
            <footer ref={ref} className={classes.msgFormFooter}>
              <div style={{display: 'flex'}}>
                <div style={{display: 'inline-block'}} className={classes.menu}>
                  <SentimentSatisfiedOutlinedIcon onClick={() => openSmiles()}/>
                </div>
              </div>
              <div style={{display: 'flex', position: 'relative'}}>
                <div onClick={handleSendMessageButton}>
                  <SharedButton className={classes.btnDisabled} disabled={messageValue.length === 0}
                    title="Message"/>
                </div>
              </div>
              {openSmileBoard
                ? <Picker pickerStyle={{width: '20rem', height: '20rem', bottom: '14rem', position: 'absolute', zIndex: 10}} onEmojiClick={onEmojiClick} />
                : null}
            </footer>
          </form>
        </div>
      </div>
    </section>
  )
}

export default withRouter(Chat)
