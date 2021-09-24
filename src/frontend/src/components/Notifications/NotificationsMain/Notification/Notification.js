import styles from './styles'
import Typography from '@material-ui/core/Typography'
import SimpleMenu from '../../../../shared/PopupMenu/PopupMenu'
import ThreeDots from '../../../../shared/ThreeDots/TreeDots'
import NotificationAdditions from '../Additions/NotificationAdditions'
import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../../../shared/Image/Image'

function Notification (props) {
  const {
    userId = 5,
    avatarPublicId,
    userName = 'Fred Grint',
    userAction = 'shared a post:',
    userText = 'You can place a request in our Standard Product Catalogue following a few simple steps: ad your product to the cart, fill the contact form and complete your request.',
    notificationTime = '2d'
  } = props

  const classes = styles()

  const linkToUserProfile = '/profiles/' + userId

  return (
    <div className={classes.notification}>
      <div>
        <Link to={linkToUserProfile}>
          <Image
            imageUrl={avatarPublicId}
            alt={'user avatar'}
            className={classes.userAvatar}
            type={'mediumAvatar'}
          />
        </Link>
      </div>
      <div className={classes.content}>
        <Typography variant="body1">
          <Link to={linkToUserProfile} className={classes.link}>
            <span className={classes.userName}>{userName + ' '}</span>
          </Link>
          <span className={classes.actionAndText}>{userAction + ' ' + userText}</span>
        </Typography>
      </div>
      <div className={classes.notificationTimeAndMenu}>
        <div className={classes.notificationTime}>
          {notificationTime}
        </div>
        <SimpleMenu menuItem={<ThreeDots/>} userData={<NotificationAdditions userName={userName}/>}/>
      </div>
    </div>
  )
}

export default Notification
