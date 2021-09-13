import http from '../../services/httpService'
import * as actions from '../Network/networkActionTypes'

export const createNewInvitationAction = (payload) => (dispatch) => {
  return http
    .post('/api/invitations', { ...payload })
    .then((res) => res.data)
    .then((invitationObj) => {
      dispatch({ type: actions.ADD_NEW_INVITATION, payload: invitationObj })
    })
}

export const getInvitationsForMe = () => (dispatch) => {
  return http
    .get('/api/invitations/for_me')
    .then((res) => res.data)
    .then((invitationsList) => {
      console.log(invitationsList)
      dispatch({ type: actions.SAVE_INVITATIONS_FOR_ME, payload: invitationsList })
    })
}

export const getInvitationsFromMe = () => (dispatch) => {
  return http
    .get('/api/invitations/from_me')
    .then((res) => res.data)
    .then((invitationsList) => {
      console.log(invitationsList)
      dispatch({ type: actions.SAVE_INVITATIONS_FROM_ME, payload: invitationsList })
    })
}

export const getAllInvitations = () => (dispatch) => {
  // await Promise.all([getInvitationsForMe(dispatch), getInvitationsFromMe(dispatch)])
  //   .then((results) => {
  //     console.log(results)
  //     console.log('WAS COMPLETED')
  //   })
  dispatch(getInvitationsForMe())
  dispatch(getInvitationsFromMe())
}
