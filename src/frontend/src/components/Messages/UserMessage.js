import React from 'react'
import Style from './styles'
import Image from '../../shared/Image/Image'
import clsx from 'clsx'

function UserMessage ({text, timeTitle, timeSent, messageSender}) {
  const classes = Style()

  return (
    <>
      <time className={clsx(classes.emptyMessageTitle, timeTitle !== '' && classes.messageListTimeHeading)}>{timeTitle}</time>
      <div className={classes.eventListItem}>
        <Image
          imageUrl={messageSender && messageSender.avatarPublicId}
          alt={messageSender && messageSender.fullName}
          className={classes.userAvatar}
          type={'extraSmallAvatar'}
        />
        <div className={classes.messageWrapper}>
          <div className={classes.messageGroupMeta}>
            <span className={classes.messageGroupMetaText}>{messageSender && messageSender.fullName}</span>
            <span className={classes.messageSentTime}> &bull; {timeSent}</span>
          </div>
          <div className={classes.eventListItemMessageBubble}>
            <p className={classes.eventListItemBody}>
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserMessage