import styles from './styles'
import Typography from '@material-ui/core/Typography'
import SimpleMenu from '../../../../shared/PopupMenu/PopupMenu'
import ThreeDots from '../../../../shared/ThreeDots/TreeDots'
import NotificationAdditions from '../Additions/NotificationAdditions'
import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../../../shared/Image/Image'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import clsx from 'clsx'
import getTimeSinceCreated from '../../../../services/timePassedServiceShort'

function generateMainText (number, notificationType) {
  return number > 20 ? `Outstanding result! You seem to be a confident member of LinkedIn network. Number of ${notificationType}s is more than 20. `
    : number > 10 ? `Great result. Number of ${notificationType}s is more than 10.`
      : number > 5 ? `Your posts are getting more attention from community. Number of ${notificationType}s is more than 5.`
        : number > 2 ? `Great start. Number of ${notificationType}s is more than 2.`
          : 'Let the communication begin.'
}

function Notification (props) {
  const {notification} = props
  const { id, type, data, isRead, createdDate } = notification
  const { 'post_id': postId, 'number_of_likes': numberOfLikes = 0, 'number_of_comments': numberOfComments = 0 } = data

  let headerText
  let mainText

  switch (type) {
    case 'POST_WAS_LIKED':
      headerText = `Your post with id ${postId} was liked ${numberOfLikes} times`
      mainText = generateMainText(numberOfLikes, 'like')
      break

    case 'NEW_COMMENTS_POST':
      headerText = `Your post with id ${postId} was commented ${numberOfComments} times`
      mainText = generateMainText(numberOfComments, 'comment')
      break

    default:
  }

  const classes = styles()

  const thumbsUpIcon = <Image
    imageUrl={'linkedin/general/uj1vnnyai3jssffhgasg'}
    alt={'user avatar'}
    className={classes.notificationImg}
    type={'smallAvatar'}
  />

  return (
    <div key={notification.id} className={clsx(classes.notification, !isRead ? classes.wasNotRead : '')}>
      <div>
        {type == 'POST_WAS_LIKED' ? thumbsUpIcon : <ChatOutlinedIcon className={classes.notificationImg}/>}
      </div>
      <div className={classes.content}>
        <Typography variant="body1">
          <Link to={`/posts/${postId}`} className={classes.link}>
            <span className={classes.userName}>{headerText}</span>
          </Link>
          <span className={classes.mainText}>{mainText}</span>
        </Typography>
      </div>

      <div className={classes.notificationTimeAndMenu}>
        <div className={classes.notificationTime}>
          {getTimeSinceCreated(createdDate)}
        </div>
        <SimpleMenu menuItem={<ThreeDots/>} userData={<NotificationAdditions userName={type}/>}/>
      </div>
    </div>
  )
}

export default Notification
