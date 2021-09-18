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
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
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
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
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
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const getMyConnectionsAction = () => (dispatch) => {
  http
    .get('/api/users/connections')
    .then(res => {
      dispatch({
        type: actions.SAVE_MY_CONNECTIONS,
        payload: res.data
      })
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const deleteConnectionAction = (activeUserId, userWhomId) => (dispatch) => {
  return http
    .delete(`/api/connections/${activeUserId}/${userWhomId}`)
    .then((res) => res.status)
    .then((status) => {
      if (status === 200 || status === 204) {
        dispatch({ type: actions.DELETE_CONNECTION, payload: userWhomId })
      }
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const deleteInvitationAction = (id) => (dispatch) => {
  return http
    .delete(`/api/invitations/${id}`)
    .then((res) => res.status)
    .then((status) => {
      if (status === 200 || status === 204) {
        dispatch({ type: actions.DELETE_INVITATION, payload: id })
      }
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const acceptInvitationAction = (invitationId) => (dispatch) => {
  return http
    .put(`/api/invitations/accept/${invitationId}`)
    .then((res) => res.status)
    .then((status) => {
      if (status === 200 || status === 204) {
        toast.info(`Invitation with id: ${invitationId} was accepted`)
        dispatch({ type: actions.DELETE_INVITATION, payload: invitationId })
      }
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}
