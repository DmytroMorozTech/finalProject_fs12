import * as actions from './certificationActionTypes'
import http from '../../services/httpService'

export const createNewCertificationAction = (payload) => (dispatch) => {
  return http
    .post('/api/certifications', { text: payload.text })
    .then((res) => res.data)
    .then((newPostObj) => {
      dispatch({ type: actions.ADD_NEW_CERTIFICATION, payload: newPostObj })
    })
}