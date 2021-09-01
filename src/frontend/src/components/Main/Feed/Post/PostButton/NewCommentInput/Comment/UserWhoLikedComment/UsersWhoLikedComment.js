import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import UsersWhoLikedCommentItem from './UsersWhoLikedCommentItem'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'

const UsersWhoLikedComment = (props) => {
  const {usersWhoLikedComment, commentId} = props
  const usersWhoLikedThisComment = usersWhoLikedComment[commentId]
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
          {usersWhoLikedThisComment.length}
        </Typography>
      </div>
      <hr className={classes.line}/>
      <div className={classes.usersWhoLiked}>
        {usersWhoLikedThisComment.map(user => <UsersWhoLikedCommentItem key={user.id} user={user}/>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    usersWhoLikedComment: state.comments.usersWhoLikedComment,
    commentId: state.modal.activeCommentId
  }
}

export default connect(mapStateToProps, null)(UsersWhoLikedComment)
