import React from 'react'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import UsersWhoLikedItem from './UserWhoLikedItem/UserWhoLikedItem'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'

const UsersWhoLiked = (props) => {
  const { id, usersWhoLiked } = props

  const usersWhoLikedThisId = usersWhoLiked[id]

  const classes = styles()

  return (
    <div>
      <div className={classes.title}>
        <Typography variant="h3" className={classes.subtitle}>
          All reactions
        </Typography>
        <div>
          <ThumbUpAltIcon className={classes.likeMini}/>
        </div>
        <Typography variant="h5" className={classes.number}>
          {usersWhoLikedThisId.length}
        </Typography>
      </div>
      <hr className={classes.line}/>
      <div className={classes.usersWhoLiked}>
        {usersWhoLikedThisId.map(
          user => <UsersWhoLikedItem key={user.id} user={user}
            isLastChild={usersWhoLikedThisId[usersWhoLikedThisId.length - 1].id === user.id}/>
        )}
      </div>
    </div>
  )
}

export default UsersWhoLiked
