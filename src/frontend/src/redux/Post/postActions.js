import * as actions from './postActionTypes'
import http from '../../services/httpService'
import toggleModalAction from '../Modal/modalActions'
import { SHOW_USERS_WHO_LIKED_POST } from '../../components/Modal/modalTypes'

export const createNewPostAction = (payload) => (dispatch) => {
  return http
    .post('/api/posts', { text: payload.text })
    .then((res) => res.data)
    .then((newPostObj) => {
      dispatch({ type: actions.ADD_NEW_POST, payload: newPostObj })
    })
}

export const getCommentsForPostAction = (postId) => (dispatch) => {
  return http
    .get(`/api/comments/for_post/${postId}`)
    .then((res) => res.data)
    .then((listOfComments) => {
      dispatch({ type: actions.SAVE_COMMENTS_FOR_POST, payload: { listOfComments, postId } })
    })
}

export const createNewCommentAction = ({ text, id }) => (dispatch) => {
  return http
    .post('/api/comments', { text: text, postId: id })
    .then((res) => res.data)
    .then((newCommentObj) => {
      dispatch({
        type: actions.ADD_NEW_COMMENT_FOR_POST,
        payload: { comment: newCommentObj, postId: id }
      })
    })
}

export const getUsersWhoLikedPostAction = (payload) => (dispatch) => {
  const id = payload
  return http
    .get(`/api/users/who_liked_post/${id}`)
    .then((res) => res.data)
    .then((usersList) => {
      dispatch({
        type: actions.SAVE_USERS_WHO_LIKED_POST,
        payload: { usersList, id }
      })
    })
    .then(() =>
      dispatch(toggleModalAction({ modalType: SHOW_USERS_WHO_LIKED_POST, id: id })))
}

export const toggleLikeAction = (payload) => (dispatch) => {
  const id = payload

  return http
    .post(`/api/posts/toggle_like/${id}`)
    .then((res) => res.data)
    .then((newPostObj) => {
      dispatch({ type: actions.UPDATE_POST, payload: newPostObj })
      dispatch({ type: actions.UPDATE_BOOKMARKED_POST, payload: newPostObj })
    })
}

export const toggleBookmarkAction = (payload) => (dispatch) => {
  const id = payload

  return http
    .post(`/api/posts/toggle_bookmark/${id}`)
    .then((res) => res.data)
    .then((newPostObj) => {
      dispatch({ type: actions.UPDATE_POST, payload: newPostObj })
      if (!newPostObj.isBookmarkedByActiveUser) {
        dispatch({ type: actions.DELETE_BOOKMARKED_POST, payload: newPostObj.id })
      } else if (newPostObj.isBookmarkedByActiveUser) {
        dispatch({ type: actions.SAVE_BOOKMARKED_POST, payload: newPostObj })
      }
    })
}