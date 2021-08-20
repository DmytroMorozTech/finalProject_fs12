import * as actions from './certificationActionTypes'
import http from '../../services/httpService'

export const createNewCertificationAction = (payload) => (dispatch) => {
  return http
    .post('/api/certifications', { text: payload.values })
    .then((res) => res.data)
    .then((newCertificationObj) => {
      dispatch({ type: actions.ADD_NEW_CERTIFICATION, payload: newCertificationObj })
    })
}

export const updateCertificationAction = (payload) => (dispatch) => {
  const id = payload

  return http
    .post(`/api/certifications/${id}`, { text: payload.values })
    .then((res) => res.data)
    .then((newCertificationObj) => {
      dispatch({ type: actions.UPDATE_CERTIFICATION, payload: newCertificationObj })
    })
}