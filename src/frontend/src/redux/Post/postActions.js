import * as actions from './postActionTypes'
import http from '../../services/httpService'
import toggleModalAction from '../Modal/modalActions'
import { USERS_WHO_LIKED_POST } from '../Modal/modalTypes'

export const createNewPostAction = (payload) => (dispatch) => {
  return http
    .post('/api/posts', { text: payload.text })
    .then((res) => res.data)
    .then((newPostObj) => {
      dispatch({ type: actions.ADD_NEW_POST, payload: newPostObj })
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
      dispatch(toggleModalAction({ modalType: USERS_WHO_LIKED_POST, id: id })))
}

export const togglePostLikeAction = (payload) => (dispatch) => {
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
