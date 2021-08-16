import * as actions from './userActionTypes'
import http from '../../services/httpService'

const headers = {
  'Authorization': 'Bearer ' + localStorage.getItem('token'),
  'content-type': 'application/json',
  'accept': 'application/json'
}

export const getActiveUser = () => (dispatch) => {
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