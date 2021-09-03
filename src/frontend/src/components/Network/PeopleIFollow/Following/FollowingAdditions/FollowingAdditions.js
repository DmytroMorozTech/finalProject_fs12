import React from 'react'
import FollowingAdditionsItem from './FollowingAdditionsItem/FollowingAdditionsItem'

function FollowingAdditions ({handleAll, handleConnections, handleOutOfNetwork, handleCompanies}) {
  const items = [
    {
      title: 'All',
      subtitle: '',
      onClick: handleAll
    },
    {
      title: 'Connections',
      subtitle: 'Connections you are following',
      onClick: handleConnections
    },
    {
      title: 'Out-of-Network',
      subtitle: 'People you are following, who are not connections',
      onClick: handleOutOfNetwork
    },
    {
      title: 'Companies',
      subtitle: 'Companies you are following',
      onClick: handleCompanies
    }
  ]

  return (
    <div>
      {items.map(({ title, ...rest }, i) => (
        <FollowingAdditionsItem key={i} title={title} {...rest}/>
      ))}
    </div>
  )
}

export default FollowingAdditions
