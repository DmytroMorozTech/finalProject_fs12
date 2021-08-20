import * as actions from './userActionTypes'
import http from '../../services/httpService'
import getHeaders from '../../services/headersService'

export const getActiveUserAction = () => (dispatch) => {
  dispatch({type: actions.LOADING_USERS, payload: true})
  return http
    .get('api/activeuser', {headers: getHeaders()})
    .then(res => {
      dispatch({
        type: actions.SAVE_ACTIVE_USER,
        payload: res.data
      })
      dispatch({ type: actions.LOADING_USERS, payload: false })
    })
}

export const signOutAction = () => (dispatch) => {
  dispatch({
    type: actions.SIGN_OUT,
    payload: null
  })
}
