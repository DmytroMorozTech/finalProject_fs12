import * as actions from './postActionTypes'
import http from '../../services/httpService'
import toggleModalAction from '../Modal/modalActions'
import { SEND_MESSAGE, USERS_WHO_LIKED_POST } from '../Modal/modalTypes'
import { uploadPostImgAction } from '../Image/imageActions'
import { uploadPostVideoAction } from '../Video/videoActions'
import { toast } from 'react-toastify'

export const createNewPostAction = (payload) => async (dispatch) => {
  dispatch({ type: actions.POST_IS_BEING_UPLOADED, payload: true })

  const { text, image, video } = payload
  let uploadedImgPublicId = ''
  let uploadedVideoPublicId = ''

  if (image !== null) {
    uploadedImgPublicId = await uploadPostImgAction(image)
  }

  if (video !== null) {
    uploadedVideoPublicId = await uploadPostVideoAction(video)
  }

  return http
    .post('/api/posts', {
      text: text,
      imgPublicId: uploadedImgPublicId,
      videoPublicId: uploadedVideoPublicId
    })
    .then((res) => res.data)
    .then((newPostObj) => {
      dispatch({ type: actions.ADD_NEW_POST, payload: newPostObj })
      dispatch(toggleModalAction())
      dispatch({ type: actions.POST_IS_BEING_UPLOADED, payload: false })
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

export const togglePostLikeGeneralAction = (payload) => (dispatch) => {
  const id = payload

  return http
    .post(`/api/posts/toggle_like/${id}`)
    .then((res) => res.data)
    .then((newPostObj) => {
      dispatch({ type: actions.UPDATE_POST, payload: newPostObj })
      dispatch({ type: actions.UPDATE_BOOKMARKED_POST, payload: newPostObj })
    })
}

export const togglePostLikeSingleAction = (payload) => (dispatch) => {
  const id = payload

  return http
    .post(`/api/posts/toggle_like/${id}`)
    .then((res) => res.data)
    .then((newPostObj) => {
      dispatch({ type: actions.SAVE_POST_SINGLE, payload: newPostObj })
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

export const findSinglePostByIdAction = (postId, setPostIsLoading) => (dispatch) => {
  setPostIsLoading(true)
  return http
    .get(`/api/posts/${postId}`)
    .then(res => {
      dispatch({
        type: actions.SAVE_POST_SINGLE,
        payload: res.data
      })
      setPostIsLoading(false)
    })
}

export const createMessageFromFeed = (data) => {
  return http
    .post(`api/messages/from_feed`, data)
    .then((res) => res.status)
    .then((status) => {
      if (status === 200 || status === 204) {
        toast.info('Your message was sent successfully')
      }
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const modalSendMessage = (postId) => (dispatch) => {
  dispatch(toggleModalAction({ modalType: SEND_MESSAGE, id: postId }))
}
