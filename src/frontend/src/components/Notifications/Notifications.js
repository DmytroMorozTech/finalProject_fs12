import React from 'react'
import Style from './styles'
import Typography from '@material-ui/core/Typography'
import TemporaryAvatar from '../../temporaryImages/avatar.jpg'
import ThreeDots from '../../shared/ThreeDots/TreeDots'

function Notifications ({
  userAvatar = TemporaryAvatar,
  userName = 'Fred Grint',
  userAction = 'shared a post:',
  userText = 'You can place a request in our Standard Product Catalogue following a few simple steps: ad your product to the cart, fill the contact form and complete your request.',
  notificationTime = '2d'
}) {
  const classes = Style()
  return (
    <div className={classes.notifications}>
      <div className={classes.notification}>
        <div>
          <img src={userAvatar} alt={'user avatar'} className={classes.userAvatar}/>
        </div>
        <div className={classes.content}>
          <Typography variant="body1">
            <span className={classes.userName}>{userName + ' '}</span>
            <span className={classes.actionAndText}>{userAction + ' ' + userText}</span>
          </Typography>
        </div>
        <div className={classes.notificationTimeAndMenu}>
          <div className={classes.notificationTime}>
            {notificationTime}
          </div>
          <ThreeDots/>
        </div>
      </div>
    </div>
  )
}

export default Notifications
