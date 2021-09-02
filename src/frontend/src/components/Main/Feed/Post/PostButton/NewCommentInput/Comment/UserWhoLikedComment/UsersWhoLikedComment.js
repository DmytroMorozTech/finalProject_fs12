import React from 'react'
import { connect } from 'react-redux'
import UsersWhoLiked from '../../../../../../../../shared/UserWhoLiked/UserWhoLiked'

const UsersWhoLikedComment = (props) => {
  const {usersWhoLikedComment, commentId} = props

  return (
    <UsersWhoLiked id={commentId} usersWhoLiked = {usersWhoLikedComment} />
  )
}

const mapStateToProps = (state) => {
  return {
    usersWhoLikedComment: state.comments.usersWhoLikedComment,
    commentId: state.modal.activeCommentId
  }
}

export default connect(mapStateToProps, null)(UsersWhoLikedComment)
