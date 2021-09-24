import React from 'react'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { activeUserSelector } from '../../../redux/User/userSelector'
import Image from '../../../shared/Image/Image'

function MainLeft (props) {
  const activeUser = useSelector(activeUserSelector)

  const {
    numberOfConnections = 45,
    numberOfViews = 40
  } = props

  const classes = styles()

  const linkToActiveUserProfile = '/profiles/' + activeUser.id

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Link to={linkToActiveUserProfile} className={classes.link}>
          <Image
            imageUrl={activeUser.avatarPublicId}
            className={classes.largeAvatar}
            type={'profileAvatar'}
          />
          <div className={classes.name}>{activeUser.fullName}</div>
        </Link>
        <Typography variant="h6" color="textSecondary" align="center">
          {activeUser.positionAndCompany}
        </Typography>
      </div>
      <hr className={classes.line}/>
      <Link to='/network/connections' className={classes.link}>
        <div className={classes.connection}>
          <div className={classes.connectionLink}>
            <span>Connections</span>
            <span className={classes.number}>{numberOfConnections}</span>
          </div>
          <span className={classes.connectionText}>Grow your network</span>
        </div>
      </Link>
      {/* Link is hardcoded below */}
      <Link to='/home' className={classes.link}>
        <div className={classes.views}>
          <span>Who viewed your profile</span>
          <span className={classes.number}>{numberOfViews}</span>
        </div>
      </Link>
      <hr className={classes.line}/>
      <Link to='/bookmarked' className={classes.link}>
        <div className={classes.items}>
          <BookmarkIcon/>
          <span>My items</span>
        </div>
      </Link>
    </div>
  )
}

export default MainLeft