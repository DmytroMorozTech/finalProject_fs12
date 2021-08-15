import React from 'react'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import Avatar from '../../../shared/Avatar/Avatar'
import avatarUrl from '../../../temporaryImages/avatar.jpg'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import { Link } from 'react-router-dom'

function MainLeft (props) {
  const {
    userName = 'Richard West',
    jobPosition = 'Junior Java developer',
    numberOfConnections = 45,
    numberOfViews = 40
  } = props
  const classes = styles()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Link exact to="/profile" className={classes.link}>
          <div className={classes.largeAvatar}>
            <Avatar avatarUrl={avatarUrl}/>
          </div>
          <div className={classes.name}>{userName}</div>
        </Link>
        <Typography variant="h6" color="textSecondary" align="center">
          {jobPosition}
        </Typography>
      </div>
      <hr className={classes.line}/>
      <Link underline="none">
        <div className={classes.connection}>
          <div className={classes.connectionLink}>
            <span>Connections</span>
            <span className={classes.number}>{numberOfConnections}</span>
          </div>
          <span className={classes.connectionText}>Grow your network</span>
        </div>
      </Link>
      <Link underline="none">
        <div className={classes.views}>
          <span>Who viewed your profile</span>
          <span className={classes.number}>{numberOfViews}</span>
        </div>
      </Link>
      <hr className={classes.line}/>
      <Link exact to='/bookmarked'>
        <div className={classes.items}>
          <BookmarkIcon/>
          <span>My items</span>
        </div>
      </Link>
    </div>
  )
}
export default MainLeft