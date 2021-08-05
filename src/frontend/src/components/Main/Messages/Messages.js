import React, { useState } from 'react'
import Style from './styles'
import MyAvatarMessage from '../../../temporaryImages/myAvatarMessage.JPG'
import TemporaryAvatar from '../../../temporaryImages/avatarNotification.jpg'
import TemporaryAvatarOne from '../../../temporaryImages/avatarTempMessage.png'
import TemporaryAvatarTwo from '../../../temporaryImages/avatarTempMassegeTwo.png'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import OpenInNewSharpIcon from '@material-ui/icons/OpenInNewSharp'
import MenuSharpIcon from '@material-ui/icons/MenuSharp'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import InputBase from '@material-ui/core/InputBase'

function Messages ({
  myAvatar = MyAvatarMessage,
  userAvatar = TemporaryAvatar,
  userAvatarOne = TemporaryAvatarOne,
  userAvatarTwo = TemporaryAvatarTwo,
  userName = 'Fred Grint',
  userNameOne = 'Kolya Gerasimov',
  userNameTwo = 'Alisa Seleznova',
  userDevice = 'Mobile Device',
  lastText = '"You can place a request in our Standard Product Catalogue following a few simple steps: ad your product to the cart, fill the contact form and complete your request."',
  dataLastMessage = '31 july 2021 year',
  dataMessage = '31 july 2021 year',
  daysAgoOnline = '4 days ago'
}) {
  const classes = Style()
  const [messageValue, setMessageValue] = useState('')
  const handleCommentInputChange = e => {
    let messageInputVal = e.currentTarget.value
    setMessageValue(messageInputVal)
  }
  return (
    <main className={classes.layoutListDetail}>
      <div className={classes.listDetailInner}>
        <section className={classes.layoutList}>

          <div className={classes.containerHeader}>
            <div className={classes.containerTitle}>
              <h1 className={classes.flexGrow}>Messages</h1>
              <div className={classes.menu}>
                <MoreHorizIcon/>
              </div>
              <div className={classes.menu}>
                <OpenInNewSharpIcon/>
              </div>
            </div>

            <div>
              <div className={classes.header_search}>
                <SearchRoundedIcon className={`${classes.absolut} ${classes.iconSearch}`}/>
                <input placeholder="Search"/>
                <div className={classes.menu}>
                  <MenuSharpIcon className={classes.iconNavMenu}/>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ul className={classes.containerConversationsList}>
              <li className={classes.containerConvoItem}>
                <div className={classes.dFlex}>

                  <div className={classes.selectableEntity}>
                    <div className={classes.absolut}>
                      <img src={userAvatar} alt={'user avatar'} className={classes.userAvatar}/>
                      <div className={classes.statusUserAvatar}/>
                    </div>
                  </div>

                  <div className={classes.conversationCardContent}>
                    <div className={`${classes.conversationCardTitleRow} ${classes.dFlex}`}>
                      <div className={classes.userName}>{userName}</div>
                      <div className={classes.dataMessage}> {dataLastMessage}</div>
                    </div>
                    <div className={classes.conversationCardTitleRow}>
                      <div className={classes.flexGrow2}>
                        <p className={classes.conversationCardMessageSnippet}><span>{userName + ':  ' + lastText}</span></p>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li className={classes.containerConvoItem}>
                <div className={classes.dFlex}>

                  <div className={classes.selectableEntity}>
                    <div className={classes.absolut}>
                      <img src={userAvatarOne} alt={'user avatar'} className={classes.userAvatar}/>
                      <div className={classes.statusUserAvatar}/>
                    </div>
                  </div>

                  <div className={classes.conversationCardContent}>
                    <div className={`${classes.conversationCardTitleRow} ${classes.dFlex}`}>
                      <div className={classes.userName}>{userNameOne}</div>
                      <div className={classes.dataMessage}> {dataMessage}</div>
                    </div>
                    <div className={classes.conversationCardTitleRow}>
                      <div className={classes.flexGrow2}>
                        <p className={classes.conversationCardMessageSnippet}>{userNameOne + ':  ' + lastText}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li className={classes.containerConvoItem}>
                <div className={classes.dFlex}>

                  <div className={classes.selectableEntity}>
                    <div className={classes.absolut}>
                      <img src={userAvatarTwo} alt={'user avatar'} className={classes.userAvatar}/>
                      <div className={classes.statusUserAvatar}/>
                    </div>
                  </div>

                  <div className={classes.conversationCardContent}>
                    <div className={`${classes.conversationCardTitleRow} ${classes.dFlex}`}>
                      <div className={classes.userName}>{userNameTwo}</div>
                      <div className={classes.dataMessage}> {dataMessage}</div>
                    </div>
                    <div className={classes.conversationCardTitleRow}>
                      <div className={classes.flexGrow2}>
                        <p className={classes.conversationCardMessageSnippet}>{userNameTwo + ':  ' + lastText}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className={classes.messagingDetail}>
          <div className={classes.scaffoldLayout}>
            <div className={classes.sharedTitleBarContainer}>
              <div className={classes.titleBar}>
                <a href={'https://www.linkedin.com/in/vadym-meshcheriakov-a77140188/'} className={classes.threadLinkToProfile}>
                  <div className={classes.entityLockup}>
                    {userName}
                  </div>
                  <div>
                    <div className={classes.statusUserRight}/>
                    <div className={classes.userDeviceStyle}>
                      {userDevice}
                    </div>
                    <span>&#8226;</span>
                    <div className={classes.userDeviceStyle}>
                      {daysAgoOnline}
                    </div>
                  </div>
                </a>
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
                            <img src={userAvatar} alt={'user avatar'} className={`${classes.userAvatar} ${classes.presenceEntity}`}/>
                            <div className={classes.presenceEntityIndicator}>

                            </div>
                          </div>
                        </div>
                        <div className={classes.entityLockupContent}>
                          <div className={classes.entityLockupTitle}>
                            <a href={'https://www.linkedin.com/in/vadym-meshcheriakov-a77140188/'} className={classes.profileLink}>
                              {userName}
                            </a>
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
                    <div className={classes.eventListItem}>
                      <a href={'https://www.linkedin.com/in/vadym-meshcheriakov-a77140188/'} className={classes.eventListItemLink}>
                        <img src={myAvatar} alt={'user avatar'} className={`${classes.userAvatar} ${classes.myAvatarMessage}`}/>
                      </a>
                      <div className={classes.messageGroupMeta}>
                        <a href={'https://www.linkedin.com/in/vadym-meshcheriakov-a77140188/'} className={`${classes.eventListItemLink} ${classes.messageGroupName}`}>
                          <span>Vadym Meshcheriakov</span>
                        </a>
                      </div>
                      <div className={classes.eventListItemMessageBubble}>
                        <p className={classes.eventListItemBody}>
                          Спасибо, что подтвердили мой навык «HTML+CSS»!
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <form className={classes.msgForm}>
                <div className={classes.formMsgContentContainer}>
                  <div className={classes.formMsgContentContainerScrollable}>
                    <div className={classes.addMsg}>
                      <InputBase
                        placeholder="Add a message..."
                        fullWidth={true}
                        multiline={true}
                        value={messageValue}
                        onChange={handleCommentInputChange}/>
                    </div>
                  </div>
                </div>
                <footer>

                </footer>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Messages
