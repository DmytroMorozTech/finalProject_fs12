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
import {createMessageAction} from '../../../redux/Message/messageActions'
import {useDispatch, useSelector} from 'react-redux'
import {allMessages, chatMessages} from '../../../redux/Message/messageSelector'

function Chat (props) {
  const {avatarUrl, fullName} = props.user
  const daysAgoOnline = '4 days'
  const dataMessage = '31 july 2021 year'
  const classes = Style()
  const [messageValue, setMessageValue] = useState('')
  const [inputIsFocused, setInputIsFocused] = useState(false)
  const dispatch = useDispatch()
  const messagesList = useSelector(allMessages)
  const userChatMessages = useSelector(chatMessages)

  useEffect(() => {}, [messagesList, userChatMessages])

  const handleMessageInputChange = e => {
    let messageInputVal = e.currentTarget.value
    setMessageValue(messageInputVal)
  }

  const handleSendMessageButton = () => {
    dispatch(createMessageAction({chatId: 1, text: messageValue}))
    setMessageValue('')
  }

  return (
    <section className={classes.messagingDetail}>
      <div className={classes.scaffoldLayout}>
        <div className={classes.sharedTitleBarContainer}>
          <div className={classes.titleBar}>
            <div className={classes.entityLockup}>
              {fullName}
            </div>
            <div>
              <div className={classes.statusUserRight}/>
              <span>&#8226;</span>
              <div className={classes.userDeviceStyle}>
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
                        <img src={avatarUrl} alt={fullName}
                          className={`${classes.userAvatar} ${classes.presenceEntity}`}/>
                        <div className={classes.presenceEntityIndicator}>

                        </div>
                      </div>
                    </div>
                    <div className={classes.entityLockupContent}>
                      <div className={classes.entityLockupTitle}>
                        {fullName}
                      </div>
                      <div className={classes.entityLockupSubtitle}>
                        <div>
                          React/Node Developer, Looking for opportunities
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <time className={classes.messageListTimeHeading}>{dataMessage}</time>
                {messagesList.map(m => <UserMessage text={m.text}/>)}
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
                    title="Message" />
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

export default Chat