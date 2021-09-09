import * as actions from './profileActionTypes'
import http from '../../services/httpService'
import convertStringsToLocalDate from '../../utils/convertStringsToLocalDate'
import convertStringsToLocalDateCert from '../../utils/convertStringsToLocalDateCert'
import convertStrToLocalDateExperience from '../../utils/convertStrToLocalDateExperience'
import {toast} from 'react-toastify'

export const getActiveProfileAction = (userId) => (dispatch) => {
  dispatch({type: actions.LOADING_PROFILE, payload: true})
  return http
    .get(`../api/users/profiles/${userId}`)
    .then(res => {
      dispatch({
        type: actions.SAVE_ACTIVE_PROFILE,
        payload: res.data
      })
      dispatch({ type: actions.LOADING_PROFILE, payload: false })
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const createNewEducationAction = (payload) => (dispatch) => {
  convertStringsToLocalDate(payload)

  return http
    .post('/api/educations', payload)
    .then((res) => res.data)
    .then((education) => {
      dispatch({ type: actions.ADD_NEW_EDUCATION, payload: education })
      toast.info('New education was added',
        {position: toast.POSITION.TOP_CENTER, autoClose: 2500})
    })
}

export const updateEducationAction = (payload, id) => (dispatch) => {
  convertStringsToLocalDate(payload)
  return http
    .put(`/api/educations/${id}`, payload)
    .then((res) => res.data)
    .then((education) => {
      dispatch({ type: actions.UPDATE_EDUCATION, payload: education })
      toast.info('Education was updated',
        {position: toast.POSITION.TOP_CENTER, autoClose: 2500})
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const deleteEducationAction = (id) => (dispatch) => {
  return http
    .delete(`/api/educations/${id}`)
    .then((res) => res.status)
    .then((status) => {
      if (parseInt(status) === 200 || parseInt(status) === 204) {
        dispatch({ type: actions.DELETE_EDUCATION, payload: id })
        toast.info('Education was deleted',
          {position: toast.POSITION.TOP_CENTER, autoClose: 2500})
      }
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const createNewCertificationAction = (payload) => (dispatch) => {
  convertStringsToLocalDateCert(payload)

  return http
    .post('/api/certifications', payload)
    .then((res) => res.data)
    .then((certification) => {
      dispatch({ type: actions.ADD_NEW_CERTIFICATION, payload: certification })
      toast.info('New certification was added',
        {position: toast.POSITION.TOP_CENTER, autoClose: 2500})
    })
}

export const updateCertificationAction = (payload, id) => (dispatch) => {
  convertStringsToLocalDateCert(payload)
  return http
    .put(`/api/certifications/${id}`, payload)
    .then((res) => res.data)
    .then((certification) => {
      dispatch({ type: actions.UPDATE_CERTIFICATION, payload: certification })
      toast.info('Certification was updated',
        {position: toast.POSITION.TOP_CENTER, autoClose: 2500})
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const deleteCertificationAction = (id) => (dispatch) => {
  return http
    .delete(`/api/certifications/${id}`)
    .then((res) => res.status)
    .then((status) => {
      if (parseInt(status) === 200 || parseInt(status) === 204) {
        dispatch({ type: actions.DELETE_CERTIFICATION, payload: id })
        toast.info('Certification was deleted',
          {position: toast.POSITION.TOP_CENTER, autoClose: 2500})
      }
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const createNewWorkPlaceAction = (payload) => (dispatch) => {
  convertStringsToLocalDate(payload)
  if (payload.isCurrentlyEmployed) { payload.dateFinish = '' }

  return http
    .post(`/api/work-places/${payload.organizationId}`, payload)
    .then((res) => res.data)
    .then((workPlace) => {
      dispatch({ type: actions.ADD_NEW_EXPERIENCE, payload: workPlace })
      toast.info('New working experience was added',
        {position: toast.POSITION.TOP_CENTER, autoClose: 2500})
    })
}

export const updateWorkPlaceAction = (payload, workPlaceId) => (dispatch) => {
  convertStrToLocalDateExperience(payload)

  return http
    .put(`/api/work-places/${workPlaceId}`, payload)
    .then((res) => res.data)
    .then((workPlace) => {
      dispatch({ type: actions.UPDATE_EXPERIENCE, payload: workPlace })
      toast.info('Workplace was updated',
        {position: toast.POSITION.TOP_CENTER, autoClose: 2500})
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const deleteWorkPlaceAction = (id) => (dispatch) => {
  return http
    .delete(`/api/work-places/${id}`)
    .then((res) => res.status)
    .then((status) => {
      if (parseInt(status) === 200 || parseInt(status) === 204) {
        dispatch({ type: actions.DELETE_EXPERIENCE, payload: id })
        toast.info('Workplace was deleted',
          {position: toast.POSITION.TOP_CENTER, autoClose: 2500})
      }
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const editIntroAction = (payload) => (dispatch) => {
  return http
    .put(`/api/users/profiles/intro`, payload)
    .then((res) => res.data)
    .then((profile) => {
      dispatch({ type: actions.SAVE_ACTIVE_PROFILE, payload: profile })
      toast.info('User intro was updated',
        {position: toast.POSITION.TOP_CENTER, autoClose: 2500})
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}