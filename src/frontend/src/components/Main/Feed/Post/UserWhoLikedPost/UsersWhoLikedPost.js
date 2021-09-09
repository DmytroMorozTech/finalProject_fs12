import React from 'react'
import {connect} from 'react-redux'
import UsersWhoLiked from '../../../../../shared/UserWhoLiked/UserWhoLiked'

const UsersWhoLikedPost = (props) => {
  const {usersWhoLikedPost, postId} = props

  return (
    <UsersWhoLiked id={postId} usersWhoLiked = {usersWhoLikedPost} />
  )
}

const mapStateToProps = (state) => {
  return {
    usersWhoLikedPost: state.posts.usersWhoLikedPost,
    postId: state.modal.activePostId
  }
}

export default connect(mapStateToProps, null)(UsersWhoLikedPost)
