import * as actions from './userActionTypes'
import http from '../../services/httpService'

export const getActiveUserAction = () => (dispatch) => {
  dispatch({type: actions.LOADING_USERS, payload: true})
  return http
    .get('/api/active_user')
    .then(res => {
      dispatch({
        type: actions.SAVE_ACTIVE_USER,
        payload: res.data
      })
      dispatch({type: actions.LOADING_USERS, payload: false})
    })
    .catch(() => {
      dispatch({type: actions.LOADING_USERS, payload: false})
    })
}

export const signOutAction = () => (dispatch) => {
  dispatch({
    type: actions.SIGN_OUT,
    payload: null
  })
  return http
    .get('/logout')
}

export const findUserByIdAction = (id) => (dispatch) => {
  return http
    .get(`/api/users/${id}`)
    .then(res => {
      dispatch({
        type: actions.FIND_USER_BY_ID,
        payload: res.data
      })
    })
}
