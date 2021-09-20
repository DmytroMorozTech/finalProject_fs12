import { Typography } from '@material-ui/core'
import styles from './styles'
import SimpleMenu from '../../../../shared/PopupMenu/PopupMenu'
import FilterListIcon from '@material-ui/icons/FilterList'
import React, { useState } from 'react'
import FollowingAdditions from './FollowingAdditions/FollowingAdditions'
import FollowProfile from '../FollowProfile/FollowProfile'

function Following (props) {
  const {usersFollowing} = props

  const classes = styles()
  const [kindOfFilter, setKindOfFilter] = useState('All')

  const handleAll = () => {
    setKindOfFilter('All')
  }
  const handleConnections = () => {
    setKindOfFilter('Connections')
  }
  const handleOutOfNetwork = () => {
    setKindOfFilter('Out-of-Network')
  }
  const handleCompanies = () => {
    setKindOfFilter('Companies')
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
        <div className={classes.filterMenu}>
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
        {usersFollowing.map(user => <FollowProfile key={user.id} user={user}/>)}
      </div>
    </div>
  )
}

export default Following
