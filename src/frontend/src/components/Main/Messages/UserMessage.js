import React from 'react'
import Style from './styles'
import {useSelector} from 'react-redux'
import {activeUserSelector} from '../../../redux/User/userSelector'

function UserMessage ({text, time}) {
  const classes = Style()
  const {fullName, avatarUrl} = useSelector(activeUserSelector)

  const getDate = () => {
    const splitDate = time.split('T')[1].split('.')[0].split(':').slice(0, 2)
    return splitDate[0] + ':' + splitDate[1]
  }

  return (
    <div className={classes.eventListItem}>
      <img src={avatarUrl} alt={'user avatar'} className={`${classes.userAvatar} ${classes.myAvatarMessage}`}/>
      <div className={classes.messageGroupMeta}>
        <span>{fullName}</span>
        <span className={classes.messageSentTime}> &bull; {getDate()}</span>
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