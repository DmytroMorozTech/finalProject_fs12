import fetch from 'unfetch'
import checkStatus from '../Services/checkStatus'
import * as actions from '../Post/postActionTypes'

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
      dispatch({type: actions.GET_USERS_WHO_LIKED_POST, payload: {usersList, id}})
    })
}