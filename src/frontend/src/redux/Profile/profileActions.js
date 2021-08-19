import * as actions from './profileActionTypes'
import http from '../../services/httpService'
import getHeaders from '../../services/headersService'

export const getActiveProfileAction = (userId) => (dispatch) => {
  dispatch({type: actions.LOADING_PROFILE, payload: true})
  return http
    .get(`../api/users/profiles/${userId}`, {headers: getHeaders()})
    .then(res => {
      dispatch({
        type: actions.SAVE_ACTIVE_PROFILE,
        payload: res.data
      })
      dispatch({ type: actions.LOADING_PROFILE, payload: false })
    })
}