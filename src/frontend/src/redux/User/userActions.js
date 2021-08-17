import * as actions from './userActionTypes'
import http from '../../services/httpService'

export const hasAuthenticationAction = (status) => (dispatch) => {
  dispatch({
    type: actions.HAS_AUTHENTICATION,
    payload: status
  })
}

export const getActiveUserAction = () => (dispatch) => {
  return http
    .get('api/activeuser', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
    .then(res => {
      dispatch({
        type: actions.SAVE_ACTIVE_USER,
        payload: res.data
      })
    })
}

export const signOutAction = () => (dispatch) => {
  dispatch({
    type: actions.SIGN_OUT,
    payload: null
  })
}