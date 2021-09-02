import { Typography } from '@material-ui/core'
import styles from './styles'
import SimpleMenu from '../../../../shared/PopupMenu/PopupMenu'
import FilterListIcon from '@material-ui/icons/FilterList'
import React from 'react'
import FollowingAdditions from './FollowingAdditions/FollowingAdditions'
import FollowProfile from '../FollowProfile/FollowProfile'

function Following () {
  const classes = styles()

  let kindOfFilter = 'All'

  const handleAll = () => {
    kindOfFilter = 'All'
  }
  const handleConnections = () => {
    kindOfFilter = 'Connections'
  }
  const handleOutOfNetwork = () => {
    kindOfFilter = 'Out-of-Network'
  }
  const handleCompanies = () => {
    kindOfFilter = 'Companies'
  }

  return (
    <div className={classes.following}>
      <Typography variant='h4'>
        Unfollow to stop seeing their posts in your feed. Don’t worry, they won’t be notified.
      </Typography>
      <div className={classes.filter}>
        <div>
          Filter by
          <span className={classes.kindOfFilter}> {kindOfFilter}</span>
        </div>
        <div>
          <SimpleMenu menuItem={
            <FilterListIcon/>
          } userData={
            <FollowingAdditions
              handleAll={handleAll}
              handleConnections={handleConnections}
              handleOutOfNetwork={handleOutOfNetwork}
              handleCompanies={handleCompanies}
            />
          }/>
        </div>
      </div>
      <div className={classes.peopleFollowing}>
        <FollowProfile/>
      </div>
    </div>
  )
}

export default Following
