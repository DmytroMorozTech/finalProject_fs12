import * as actions from './profileActionTypes'
import http from '../../services/httpService'
import getHeaders from '../../services/headersService'
import convertStringsToLocalDate from '../../utils/convertStringsToLocalDate'
import convertStringsToLocalDateCert from '../../utils/convertStringsToLocalDateCert'

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

export const createNewEducationAction = (payload) => (dispatch) => {
  convertStringsToLocalDate(payload)

  return http
    .post('/api/educations', payload,
      {headers: getHeaders()}
    )
    .then((res) => res.data)
    .then((education) => {
      dispatch({ type: actions.ADD_NEW_EDUCATION, payload: education })
    })
}

export const updateEducationAction = (payload, id) => (dispatch) => {
  convertStringsToLocalDate(payload)
  return http
    .put(`/api/educations/${id}`, payload,
      {headers: getHeaders()}
    )
    .then((res) => res.data)
    .then((education) => {
      dispatch({ type: actions.UPDATE_EDUCATION, payload: education })
    })
}

export const createNewCertificationAction = (payload) => (dispatch) => {
  convertStringsToLocalDateCert(payload)

  return http
    .post('/api/certifications', payload,
      {headers: getHeaders()}
    )
    .then((res) => res.data)
    .then((certification) => {
      dispatch({ type: actions.ADD_NEW_CERTIFICATION, payload: certification })
    })
}