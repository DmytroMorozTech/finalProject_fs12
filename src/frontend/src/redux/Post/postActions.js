import * as actions from './postActionTypes'
import fetch from 'unfetch'
import checkStatus from '../Services/checkStatus'
import http from '../../services/httpService'

export const getAllPostsAction = () => (dispatch) => {
  dispatch({ type: actions.LOADING_POSTS, payload: true })

  return http
    .get('api/posts')
    .then((result) => result.data)
    .then((listOfPosts) => {
      dispatch({type: actions.SAVE_POSTS, payload: listOfPosts})
      dispatch({ type: actions.LOADING_POSTS, payload: false })
    })
}

export const createNewPostAction = (payload) => (dispatch) => {
  return fetch(`/api/posts`,
    {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(checkStatus)
    .then((res) => res.json())
    .then((postObjFromServer) => {
      dispatch({type: actions.ADD_NEW_POST, payload: postObjFromServer})
    })
}

export const getCommentsForPostAction = (postId) => (dispatch) => {
  return fetch(`/api/comments/for_post/${postId}`,
    {
      headers: {'Content-Type': 'application/json'},
      method: 'GET'
    })
    .then(checkStatus)
    .then((res) => res.json())
    .then((listOfComments) => {
      dispatch({type: actions.SAVE_COMMENTS_FOR_POST, payload: {listOfComments, postId}})
    })
}

export const createNewCommentAction = ({text, id}) => (dispatch) => {
  return fetch(`/api/comments`,
    {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({ text, postId: id })
    })
    .then(checkStatus)
    .then((res) => res.json())
    .then((commentObjFromServer) => {
      dispatch(
        {
          type: actions.ADD_NEW_COMMENT_FOR_POST,
          payload: { comment: commentObjFromServer, postId: id }
        })
    })
}

export const getUsersWhoLikedPostAction = (payload) => (dispatch) => {
  const id = payload
  return fetch(`/api/users/who_liked_post/${id}`,
    {
      headers: {'Content-Type': 'application/json'},
      method: 'GET'
    })
    .then(checkStatus)
    .then((res) => res.json())
    .then((usersList) => {
      dispatch({type: actions.SAVE_USERS_WHO_LIKED_POST, payload: {usersList, id}})
    })
}

export const toggleLikeAction = (payload) => (dispatch) => {
  const id = payload
  // console.log(`toggleLikeAction with postId: ${payload}`)

  return fetch(`/api/posts/toggle_like/${id}`,
    {
      headers: {'Content-Type': 'application/json'},
      method: 'POST'
    })
    .then(checkStatus)
    .then((res) => res.json())
    .then((postObjFromServer) => {
      dispatch({type: actions.UPDATE_POST, payload: postObjFromServer})
    })
}
