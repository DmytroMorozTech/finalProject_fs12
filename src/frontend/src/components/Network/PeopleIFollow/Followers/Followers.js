import React from 'react'
import styles from './styles'
import FollowProfile from '../FollowProfile/FollowProfile'

function Followers () {
  const classes = styles()
  return (
    <div className={classes.peopleFollowers}>
      <FollowProfile/>
    </div>
  )
}

export default Followers
