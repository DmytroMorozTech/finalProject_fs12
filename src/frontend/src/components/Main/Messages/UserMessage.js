import React from 'react'
import Style from './styles'
import MyAvatarMessage from '../../../temporaryImages/myAvatarMessage.JPG'

function UserMessage ({
  myAvatar = MyAvatarMessage,
  userName = 'Vadym Meshcheriakov',
  messageText = 'test',
  profileUrl = 'https://www.linkedin.com/in/vadym-meshcheriakov-a77140188/'
}) {
  const classes = Style()

  return (
    <div className={classes.eventListItem}>
      <a href={profileUrl} className={classes.eventListItemLink}>
        <img src={myAvatar} alt={'user avatar'} className={`${classes.userAvatar} ${classes.myAvatarMessage}`}/>
      </a>
      <div className={classes.messageGroupMeta}>
        <a href={profileUrl} className={`${classes.eventListItemLink} ${classes.messageGroupName}`}>
          <span>{userName}</span>
        </a>
      </div>
      <div className={classes.eventListItemMessageBubble}>
        <p className={classes.eventListItemBody}>
          {messageText}
        </p>
      </div>
    </div>
  )
}

export default UserMessage