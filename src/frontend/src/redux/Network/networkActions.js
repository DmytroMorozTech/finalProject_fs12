import http from '../../services/httpService'
import * as actions from '../Network/networkActionTypes'
import { toast } from 'react-toastify'

export const createNewInvitationAction = (payload) => (dispatch) => {
  return http
    .post('/api/invitations', { ...payload })
    .then((res) => res.data)
    .then((invitationObj) => {
      dispatch({ type: actions.ADD_NEW_INVITATION, payload: invitationObj })
    })
}

export const getInvitationsForMeAction = () => (dispatch) => {
  http
    .get('/api/invitations/for_me')
    .then(res => {
      dispatch({
        type: actions.SAVE_INVITATIONS_FOR_ME,
        payload: res.data
      })
      dispatch({ type: actions.SET_INVITATIONS_LOADING_STATUS, payload: false })
    })
}

export const getInvitationsFromMeAction = () => (dispatch) => {
  http
    .get('/api/invitations/from_me')
    .then(res => {
      dispatch({
        type: actions.SAVE_INVITATIONS_FROM_ME,
        payload: res.data
      })
      dispatch({ type: actions.SET_INVITATIONS_LOADING_STATUS, payload: false })
    })
}

export const deleteInvitationAction = (id) => (dispatch) => {
  return http
    .delete(`/api/invitations/${id}`)
    .then((res) => res.status)
    .then((status) => {
      if (parseInt(status) === 200 || parseInt(status) === 204) {
        dispatch({ type: actions.DELETE_INVITATION, payload: id })
      }
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}
