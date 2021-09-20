import React from 'react'
import styles from './styles'
import FollowProfile from '../FollowProfile/FollowProfile'
import Typography from '@material-ui/core/Typography'

function Followers (props) {
  const {usersFollowed} = props

  const classes = styles()

  return (
    <div className={classes.followers}>
      <Typography variant='h4'>
        People who most recently followed you
      </Typography>
      <div className={classes.peopleFollowers}>
        {usersFollowed.map(user => <FollowProfile key={user.id} user={user}/>)}
      </div>
    </div>
  )
}

export default Followers
