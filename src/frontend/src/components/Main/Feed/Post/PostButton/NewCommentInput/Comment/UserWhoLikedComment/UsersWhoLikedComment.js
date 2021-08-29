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
        <Typography variant="body1" className={classes.word}>
          All
        </Typography>
        <Typography variant="body1" className={classes.icon}>
          <ThumbUpAltIcon className={classes.likeMini}/>
        </Typography>
        <Typography variant="body1" className={classes.number}>
          {usersWhoLikedThisComment.length}
        </Typography>
      </div>
      {usersWhoLikedThisComment.map(user => <UsersWhoLikedCommentItem key={user.id} user={user}/>)}
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
