import React from 'react'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import LikeMiniIcon from '../../LikeMiniIcon/LikeMiniIcon'
import { Link } from 'react-router-dom'
import Image from '../../Image/Image'

const UsersWhoLikedItem = (props) => {
  const {id, avatarPublicId, positionAndCompany, fullName} = props.user

  const classes = styles()

  const linkToUserProfile = '/profiles/' + id

  return (
    <div>
      <div className={classes.userWhoLiked}>
        <div className={classes.userInfo}>
          <div className={classes.userAvatar}>
            <Link to={linkToUserProfile} className={classes.link}>
              <Image
                imageUrl={avatarPublicId}
                alt={'user avatar'}
                className={classes.avatar}
                type={'smallAvatar'}
              />
            </Link>
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

export default UsersWhoLikedItem
