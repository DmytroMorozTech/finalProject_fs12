import http from '../../services/httpService'
import * as actions from './userActionTypes'
import convertStringsToLocalDate from '../../utils/convertStringsToLocalDate'

export const createNewEducationAction = (payload) => (dispatch) => {
  convertStringsToLocalDate(payload)

  return http
    .post('/api/educations', payload)
    .then((res) => res.data)
    .then((education) => {
      dispatch({ type: actions.ADD_NEW_EDUCATION, payload: education })
    })
}