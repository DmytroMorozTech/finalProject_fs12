import * as actions from './postActionTypes'
import fetch from 'unfetch'
import checkStatus from '../Services/checkStatus'

export const getAllPostsAction = () => (dispatch) => {
  // dispatch({type: actions.LOADING_POSTS, payload: true})

  return fetch('api/posts')
    .then(checkStatus)
    .then((result) => result.json())
    .then((listOfPosts) => {
      dispatch({type: actions.SAVE_POSTS, payload: listOfPosts})
      // dispatch({type: actions.LOADING_POSTS, payload: false});
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