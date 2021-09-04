import { Link } from 'react-router-dom'
import Image from '../../../../shared/Image/Image'
import { useState } from 'react'
import styles from './styles'
import Typography from '@material-ui/core/Typography'
import CheckIcon from '@material-ui/icons/Check'
import AddIcon from '@material-ui/icons/Add'

function FollowProfile (props) {
  const {id = 6, avatarUrl, fullName = 'Sheldon Cooper', workPlace = 'Scientist', numberFollowers = 50} = props.user
  const classes = styles()

  const linkToUserProfile = '/profile' + id

  const [follow, setFollow] = useState(true)

  const handleFollow = () => {
    follow ? setFollow(false) : setFollow(true)
  }

  return (
    <div className={classes.followProfile}>
      <div className={classes.userInfo}>
        <div>
          <Link to={linkToUserProfile} className={classes.link}>
            {/* <img alt='user`s avatar' src={avatar} className={classes.largeAvatar}/> */}
            <Image
              imageUrl={avatarUrl || 'linkedin/general/ghrchekikx3dnas6ivxm'}
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
      <div className={classes.follow} onClick={handleFollow}>
        {follow
          ? <CheckIcon fontSize='inherit'/>
          : <AddIcon fontSize='inherit' color='primary'/>
        }
        {follow
          ? <Typography variant="h5" className={classes.followTitle}>Following</Typography>
          : <Typography variant="h5" color='primary' className={classes.followTitle}>Follow</Typography>
        }
      </div>
    </div>
  )
}

export default FollowProfile
