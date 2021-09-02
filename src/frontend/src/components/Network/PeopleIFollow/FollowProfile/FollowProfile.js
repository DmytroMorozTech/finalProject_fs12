import { Link } from 'react-router-dom'
// import Image from '../../../../shared/Image/Image'
import React from 'react'
import styles from './styles'
import Typography from '@material-ui/core/Typography'

function FollowProfile (props) {
  // const {id = 6, avatarUrl = 'vnxm3wl3erio9ajtezlr', fullName = 'Sheldon Cooper'} = props.user
  const {id = 6, fullName = 'Sheldon Cooper', workPlace = 'Scientist'} = props
  const classes = styles()

  const linkToUserProfile = '/profile' + id

  return (
    <div className={classes.followProfile}>
      <Link to={linkToUserProfile} className={classes.link}>
        {/*  <Image */}
        {/*    imageUrl={avatarUrl} */}
        {/*    className={classes.largeAvatar} */}
        {/*    type={'profileAvatar'} */}
        {/*  /> */}
        <Typography variant="h4" className={classes.name}>
          {fullName}
        </Typography>
        <Typography variant="h4" color="textSecondary">
          {workPlace}
        </Typography>
      </Link>
      <hr className={classes.line}/>
      <div>

        <Typography variant="h5">
          Following
        </Typography>
      </div>
    </div>
  )
}

export default FollowProfile
