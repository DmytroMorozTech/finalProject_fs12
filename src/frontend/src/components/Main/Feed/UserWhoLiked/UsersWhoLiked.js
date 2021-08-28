import React from 'react'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Style from './styles'
import UserWhoLikedItem from './UserWhoLikedItem'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'

const UsersWhoLiked = (props) => {
  const {usersWhoLikedPost, postId} = props
  const usersWhoLikedThisPost = usersWhoLikedPost[postId]
  const classes = Style()

  return (
    <div>
      <div className={classes.title}>
        <Typography variant="body1" className={classes.word}>
            All
        </Typography>
        <Typography variant="body1" className={classes.icon}>
          <ThumbUpAltIcon className={classes.likeMini}/>
        </Typography>
        <Typography variant="body1" className={classes.number}>
          {usersWhoLikedThisPost.length}
        </Typography>
      </div>
      {usersWhoLikedThisPost.map(user => <UserWhoLikedItem key={user.id} user={user}/>)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    usersWhoLikedPost: state.posts.usersWhoLikedPost,
    postId: state.modal.activePostId
  }
}

export default connect(mapStateToProps, null)(UsersWhoLiked)
