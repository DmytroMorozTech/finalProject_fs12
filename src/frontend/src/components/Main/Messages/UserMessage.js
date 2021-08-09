import React from 'react'
import Style from './styles'
import {useSelector} from 'react-redux'
import {activeUserSelector} from '../../../redux/User/userSelector'

function UserMessage ({text}) {
  const classes = Style()
  const {fullName, avatarUrl} = useSelector(activeUserSelector)

  return (
    <div className={classes.eventListItem}>
      <img src={avatarUrl} alt={'user avatar'} className={`${classes.userAvatar} ${classes.myAvatarMessage}`}/>
      <div className={classes.messageGroupMeta}>
        <span>{fullName}</span>
      </div>
      <div className={classes.eventListItemMessageBubble}>
        <p className={classes.eventListItemBody}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default UserMessage