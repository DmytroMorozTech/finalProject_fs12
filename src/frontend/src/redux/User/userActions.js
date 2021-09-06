import * as actions from './userActionTypes'
import http from '../../services/httpService'

export const getActiveUserAction = () => (dispatch) => {
  dispatch({type: actions.LOADING_USERS, payload: true})
  return http
    .get('../../api/activeuser')
    .then(res => {
      console.log('Active user from redux:' + res.data)
      dispatch({
        type: actions.SAVE_ACTIVE_USER,
        payload: res.data
      })
      dispatch({type: actions.LOADING_USERS, payload: false})
    })
}

export const signOutAction = () => (dispatch) => {
  dispatch({
    type: actions.SIGN_OUT,
    payload: null
  })
  return http
    .get('../../logout')
    .then(() => {
      window.location.href = '/'
    }
    )
}

export const findUserByIdAction = (id) => (dispatch) => {
  return http
    .get(`../../api/users/${id}`)
    .then(res => {
      dispatch({
        type: actions.FIND_USER_BY_ID,
        payload: res.data
      })
    })
}

export const userAuthenticationAction = (status) => (dispatch) => {
  dispatch({
    type: actions.AUTHENTICATE,
    payload: status
  })
}
