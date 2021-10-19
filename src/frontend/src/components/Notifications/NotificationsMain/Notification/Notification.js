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
import { useDispatch } from 'react-redux'
import { markNotificationAsViewedAction } from '../../../../redux/Notification/notificationActions'

function generateMainText (number, notificationType) {
  return number > 20 ? `Outstanding result! You seem to be a confident member of LinkedIn network. Number of ${notificationType}s is more than 20. `
    : number > 10 ? `Great result. Number of ${notificationType}s is more than 10.`
      : number > 5 ? `Your posts are getting more attention from community. Number of ${notificationType}s is more than 5.`
        : number > 2 ? `Great start. Number of ${notificationType}s is more than 2.`
          : 'Let the communication begin.'
}

function getHowManyTimesStr (number) {
  return number === 1 ? 'once' : number === 2 ? 'twice' : `${number} times`
}

function Notification (props) {
  const {notification} = props
  const { id, type, data, isViewed, createdDate, userWhoTriggered } = notification
  const { postId, numberOfLikes = 0, numberOfComments = 0 } = data
  const classes = styles()
  const dispatch = useDispatch()

  let headerText
  let mainText

  switch (type) {
    case 'POST_WAS_LIKED':
      headerText = `Your post with id ${postId} was liked ${getHowManyTimesStr(numberOfLikes)}`
      mainText = generateMainText(numberOfLikes, 'like')
      break

    case 'NEW_COMMENTS_POST':
      headerText = `Your post with id ${postId} was commented ${getHowManyTimesStr(numberOfComments)}`
      mainText = generateMainText(numberOfComments, 'comment')
      break

    case 'NEW_POST_WAS_CREATED':
      const {fullName, text} = userWhoTriggered
      headerText = `${fullName} has created a Post. `
      mainText = text
      break

    default:
      headerText = `You've just received a new notification`
      mainText = 'Some extra data about your notification should be here'
      break
  }

  const thumbsUpImg = <Image
    imageUrl={'linkedin/general/uj1vnnyai3jssffhgasg'}
    alt={'user avatar'}
    className={classes.notificationImg}
    type={'smallAvatar'}
  />

  const userWhoTriggeredAvatarImg = userWhoTriggered ? <Image
    imageUrl={userWhoTriggered.imgPublicId}
    alt={'user avatar'}
    className={classes.notificationImg}
    type={'mediumAvatar'}
  /> : ''

  const imgForNotification = (type === 'POST_WAS_LIKED') ? thumbsUpImg
    : (type === 'NEW_COMMENTS_POST') ? <ChatOutlinedIcon className={classes.notificationImg}/>
      : userWhoTriggeredAvatarImg

  return (
    <div key={notification.id} className={clsx(classes.notification, !isViewed ? classes.wasNotViewed : '')}>
      <div>
        {imgForNotification}
      </div>
      <div className={classes.content}>
        <Typography variant="body1">
          <Link
            to={`/posts/${postId}`}
            className={classes.link}
            onClick={() => dispatch(markNotificationAsViewedAction(id))}
          >
            <span className={classes.headerText}>{headerText}</span>
            <span className={classes.mainText}>{mainText}</span>
          </Link>
        </Typography>
      </div>

      <div className={classes.notificationTimeAndMenu}>
        <div className={classes.notificationTime}>
          {getTimeSinceCreated(createdDate)}
        </div>
        <SimpleMenu
          menuItem={<ThreeDots/>}
          userData={<NotificationAdditions notificationId={id} isViewed={isViewed}/>}/>
      </div>
    </div>
  )
}

export default Notification
