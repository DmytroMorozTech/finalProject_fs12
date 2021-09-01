import React from 'react'
import styles from './styles'
import Avatar from '../../../../../../../../shared/Avatar/Avatar'
import Typography from '@material-ui/core/Typography'
import LikeMiniIcon from '../../../../../../../../shared/LikeMiniIcon/LikeMiniIcon'
import { Link } from 'react-router-dom'

const UsersWhoLikedCommentItem = (props) => {
  const {id, avatarUrl, positionAndCompany, fullName} = props.user

  const classes = styles()

  const linkToUserProfile = '/profiles/' + id

  return (
    <div className={classes.width}>
      <div className={classes.userWhoLiked}>
        <div className={classes.userInfo}>
          <div className={classes.userAvatar}>
            <div className={classes.avatar}>
              <Link to={linkToUserProfile} className={classes.link}>
                <Avatar avatarUrl={avatarUrl}/>
              </Link>
            </div>
            <div className={classes.iconStatus}>
              <LikeMiniIcon fontSize="inherit"/>
            </div>
          </div>
          <div className={classes.buttonGroup}>
            <Link to={linkToUserProfile} className={classes.link}>
              <Typography variant="h5">
                {fullName}
              </Typography>
            </Link>
            <Typography variant="h6">
              {positionAndCompany}
            </Typography>
          </div>
        </div>
      </div>
      <hr className={classes.lineItem}/>
    </div>
  )
}

export default UsersWhoLikedCommentItem
