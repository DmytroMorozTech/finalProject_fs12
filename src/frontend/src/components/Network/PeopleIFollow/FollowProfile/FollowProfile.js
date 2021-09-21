import { Link } from 'react-router-dom'
import Image from '../../../../shared/Image/Image'
import { useState } from 'react'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import CheckIcon from '@material-ui/icons/Check'
import AddIcon from '@material-ui/icons/Add'
import { toggleUserFollowedAction } from '../../../../redux/Network/networkActions'
import { useDispatch } from 'react-redux'

function FollowProfile (props) {
  const {id, avatarPublicId, fullName, workPlace, numberFollowers = 50, isFollowedByActiveUser} = props.user
  const classes = styles()
  const dispatch = useDispatch()

  const linkToUserProfile = '/profile' + id

  const [isFollowed, setIsFollowed] = useState(isFollowedByActiveUser)

  const toggleFollowHandler = () => {
    dispatch(toggleUserFollowedAction(id, setIsFollowed))
  }

  return (
    <div className={classes.followProfile}>
      <div className={classes.userInfo}>
        <div>
          <Link to={linkToUserProfile} className={classes.link}>
            <Image
              imageUrl={avatarPublicId}
              className={classes.largeAvatar}
              type={'profileAvatar'}
            />
          </Link>
          <Link to={linkToUserProfile} className={classes.link}>
            <Typography variant="h4" className={classes.name}>
              {fullName}
            </Typography>
            <Typography variant="h4" color="textSecondary">
              {workPlace}
            </Typography>
          </Link>
        </div>
        <div>
          <hr className={classes.smallLine}/>
          <Typography variant="h6">
            {numberFollowers} followers
          </Typography>
        </div>
      </div>
      <hr className={classes.line}/>
      <div className={classes.follow} onClick={toggleFollowHandler}>
        {isFollowedByActiveUser
          ? <CheckIcon fontSize='inherit'/>
          : <AddIcon fontSize='inherit' color='primary'/>
        }
        {isFollowedByActiveUser
          ? <Typography variant="h5" className={classes.followTitle}>Following</Typography>
          : <Typography variant="h5" color='primary' className={classes.followTitle}>Follow</Typography>
        }
      </div>
    </div>
  )
}

export default FollowProfile
