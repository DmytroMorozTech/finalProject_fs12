import React, {useEffect, useState} from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import UserMessage from './UserMessage'
import clsx from 'clsx'
import InputBase from '@material-ui/core/InputBase'
import ImageUpload from './imageUpload'
import AllUpload from './allUpload'
import GifOutlinedIcon from '@material-ui/icons/GifOutlined'
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import SharedButton from '../../../shared/Button/SharedButton'
import Style from './styles'
import {createMessageAction, getChatMessagesAction} from '../../../redux/Message/messageActions'
import {useDispatch, useSelector} from 'react-redux'
import {allChats, allMessages, chatMessages} from '../../../redux/Message/messageSelector'
import {withRouter} from 'react-router-dom'
import {activeUserSelector} from '../../../redux/User/userSelector'

function Chat (props) {
  const {match} = props
  const daysAgoOnline = '4 days'
  const dataMessage = '31 july 2021 year'
  const classes = Style()
  const [messageValue, setMessageValue] = useState('')
  const [inputIsFocused, setInputIsFocused] = useState(false)
  const dispatch = useDispatch()
  const messagesList = useSelector(allMessages)
  const userChatMessages = useSelector(chatMessages)
  const chatsList = useSelector(allChats)
  const chatIdFromUrl = match.params.id
  const activeUser = useSelector(activeUserSelector)

  const chatId = chatIdFromUrl || (chatsList[0] && chatsList[0].id)

  useEffect(() => {
    dispatch(getChatMessagesAction(chatId))
  }, [dispatch, chatId, messagesList])

  const handleMessageInputChange = e => {
    let messageInputVal = e.currentTarget.value
    setMessageValue(messageInputVal)
  }

  const handleSendMessageButton = () => {
    dispatch(createMessageAction({chatId, text: messageValue}))
    setMessageValue('')
  }

  const getChatMember = () => {
    const currentChat = chatsList.filter(c => c.id === +chatId)[0]
    const currentChatUsers = currentChat && currentChat.users
    return currentChatUsers && currentChatUsers.filter(u => u.id !== activeUser.id)[0]
  }

  return (
    <section className={classes.messagingDetail}>
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
            <div className={classes.menu}>
              <MoreHorizIcon/>
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
                        <img src={getChatMember() && getChatMember().avatarUrl}
                          alt={getChatMember() && getChatMember().fullName}
                          className={`${classes.userAvatar} ${classes.presenceEntity}`}/>
                        <div className={classes.presenceEntityIndicator}>
                        </div>
                      </div>
                    </div>
                    <div className={classes.entityLockupContent}>
                      <div className={classes.entityLockupTitle}>
                        {getChatMember() && getChatMember().fullName}
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
                {userChatMessages[chatId] && userChatMessages[chatId].map(m => <UserMessage key={m.id} text={m.text}
                  time={m.createdDate}/>)}
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
            <footer className={classes.msgFormFooter}>
              <div style={{display: 'flex'}}>
                <div style={{display: 'inline-block'}}>
                  <ImageUpload/>
                </div>
                <div style={{display: 'inline-block'}}>
                  <AllUpload/>
                </div>
                <div style={{display: 'inline-block'}} className={classes.menu}>
                  <GifOutlinedIcon/>
                </div>
                <div style={{display: 'inline-block'}} className={classes.menu}>
                  <SentimentSatisfiedOutlinedIcon/>
                </div>
                <div style={{display: 'inline-block'}} className={classes.menu}>
                  <VideoCallIcon/>
                </div>
              </div>
              <div style={{display: 'flex'}}>
                <div onClick={handleSendMessageButton}>
                  <SharedButton className={classes.btnDisabled} disabled={messageValue.length === 0}
                    title="Message"/>
                </div>
                <div className={classes.menu}>
                  <MoreHorizIcon/>
                </div>
              </div>
            </footer>
          </form>
        </div>
      </div>
    </section>
  )
}

export default withRouter(Chat)