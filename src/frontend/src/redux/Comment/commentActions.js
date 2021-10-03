import http from '../../services/httpService'
import * as actions from '../Comment/commentActionTypes'
import { INCREMENT_COMMENTS_COUNTER_FOR_POST } from '../Post/postActionTypes'
import { USERS_WHO_LIKED_COMMENT } from '../Modal/modalTypes'
import toggleModalAction from '../Modal/modalActions'

export const createNewCommentAction = ({ text, id }) => (dispatch) => {
  return http
    .post('/api/comments', { text: text, postId: id })
    .then((res) => res.data)
    .then((newCommentObj) => {
      dispatch({
        type: actions.ADD_NEW_COMMENT_FOR_POST,
        payload: { comment: newCommentObj, postId: id }
      })
      dispatch({
        type: INCREMENT_COMMENTS_COUNTER_FOR_POST,
        payload: { postId: id }
      })
    })
}

export const toggleCommentLikeAction = (commentId, postId) => (dispatch) => {
  return http
    .post(`/api/comments/toggle_like/${commentId}`)
    .then((res) => res.data)
    .then((newCommentObj) => {
      dispatch({ type: actions.UPDATE_COMMENT, payload: {comment: newCommentObj, postId: postId} })
      // dispatch({ type: postActions.UPDATE_BOOKMARKED_POST, payload: newPostObj })
    })
}

export const getUsersWhoLikedCommentAction = (commentId) => (dispatch) => {
  return http
    .get(`/api/users/who_liked_comment/${commentId}`)
    .then((res) => res.data)
    .then((usersList) => {
      dispatch({
        type: actions.SAVE_USERS_WHO_LIKED_COMMENT,
        payload: { usersList, commentId }
      })
    })
    .then(() =>
      dispatch(toggleModalAction({ modalType: USERS_WHO_LIKED_COMMENT, commentId: commentId })))
}
