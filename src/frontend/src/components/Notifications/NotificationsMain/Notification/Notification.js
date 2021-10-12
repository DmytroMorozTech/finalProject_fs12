import styles from './styles'
import Typography from '@material-ui/core/Typography'
import SimpleMenu from '../../../../shared/PopupMenu/PopupMenu'
import ThreeDots from '../../../../shared/ThreeDots/TreeDots'
import NotificationAdditions from '../Additions/NotificationAdditions'
import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../../../shared/Image/Image'

function Notification (props) {
  const { id, type, data, isRead } = props.notification
  console.log(`data type: ${type}`)
  console.log(JSON.parse(data))
  // const {post_id, number_of_likes = 0, number_of_comments = 0} = data
  //
  // const headerText = type == 'POST_WAS_LIKED' ? `Your post with id ${post_id} was liked ${number_of_likes} times`
  //   : ``

  const classes = styles()
  const postWasLikedImgPublicId = 'linkedin/general/txyezdylwhwfe0i3ykjp'

  // const linkToUserProfile = '/profiles/' + userId

  return (
    <div className={classes.notification}>
      <div>
        <Link to={null}>
          <Image
            imageUrl={postWasLikedImgPublicId}
            alt={'user avatar'}
            className={classes.userAvatar}
            type={'mediumAvatar'}
          />
        </Link>
      </div>
      <div className={classes.content}>
        <Typography variant="body1">
          <Link to={null} className={classes.link}>
            <span className={classes.userName}>{type + ' '}</span>
          </Link>
          <span className={classes.actionAndText}>{'userAction' + ' ' + 'userText'}</span>
        </Typography>
      </div>

      <div className={classes.notificationTimeAndMenu}>
        <div className={classes.notificationTime}>
          {type}
        </div>
        <SimpleMenu menuItem={<ThreeDots/>} userData={<NotificationAdditions userName={type}/>}/>
      </div>
    </div>
  )
}

export default Notification
