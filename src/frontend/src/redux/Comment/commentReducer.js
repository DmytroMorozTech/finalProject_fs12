import * as actions from './commentActionTypes'
import update from 'immutability-helper'

const initialState = {
  comments: {}, // key - postId, value - [commentRs, commentRs...]
  usersWhoLikedComment: {}
}

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NEW_COMMENT_FOR_POST:
      let { comment, postId: postId2 } = { ...action.payload }
      return { ...state, comments: { ...state.comments, [postId2]: [...(state.comments[postId2] || []), comment] } }

    case actions.SAVE_COMMENTS_FOR_POST:
      const { listOfComments, postId } = action.payload
      return { ...state, comments: { ...state.comments, [postId]: listOfComments } }

    case actions.UPDATE_COMMENT:
      const {comment: updatedComment, postId: postId4} = action.payload

      const currentComment = state.comments[postId4].find((comment) => comment.id === updatedComment.id)
      if (currentComment === null) return state

      const indexOfCurrentComment = state.comments[postId4].indexOf(currentComment)

      return update(state, {
        comments: {[postId4]: { $splice: [[indexOfCurrentComment, 1, updatedComment]] }}
      })

    case actions.SAVE_USERS_WHO_LIKED_COMMENT:
      const { usersList1, id1 } = action.payload
      return { ...state, usersWhoLikedComment: { ...state.usersWhoLikedComment, [id1]: usersList1 } }

    case actions.DELETE_COMMENT:
      const { commentId, postId: postId3 } = action.payload
      const updatedComments = state.comments[postId3].filter(c => c.id !== commentId)

      return { ...state, comments: { ...state.comments, [postId3]: updatedComments } }

    default: {
      return state
    }
  }
}

export default commentReducer
