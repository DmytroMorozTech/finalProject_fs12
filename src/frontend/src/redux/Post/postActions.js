import * as actions from './postActionTypes'
import fetch from 'unfetch'
import checkStatus from '../Services/checkStatus'

export const getAllPostsAction = () => (dispatch) => {
  return fetch('api/posts')
    .then(checkStatus)
    .then((result) => result.json())
    .then((listOfPosts) => {
      dispatch({type: actions.SAVE_POSTS, payload: listOfPosts})
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

export const toggleLikeAction = (payload) => (dispatch) => {
  const id = payload
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

export const getCommentsForPostAction = (postId) => (dispatch) => {
  return fetch(`/api/comments/for_post/${postId}`,
    {
      headers: {'Content-Type': 'application/json'},
      method: 'GET'
    })
    .then(checkStatus)
    .then((res) => res.json())
    .then((listOfComments) => {
      dispatch({type: actions.GET_COMMENTS_FOR_POST, payload: {listOfComments, postId}})
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
