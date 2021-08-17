import * as actions from './userActionTypes'
import http from '../../services/httpService'

const headers = {
  'Authorization': 'Bearer ' + localStorage.getItem('token'),
  'content-type': 'application/json',
  'accept': 'application/json'
}

export const hasAuthentication = (status) => (dispatch) => {
  dispatch({
    type: actions.HAS_AUTHENTICATION,
    payload: status
  })
}

export const getActiveUserAction = () => (dispatch) => {
  return http
    .get('api/activeuser', {
      headers: headers
    })
    .then(res => {
      dispatch({
        type: actions.GET_ACTIVE_USER,
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