import * as actions from '../Network/networkActionTypes'

const initialState = {
  invitationsForMe: [],
  invitationsFromMe: [],
  usersFollowing: [],
  usersFollowed: [],
  invitationsAreLoading: true
}

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NEW_INVITATION:
      return { ...state, invitationsFromMe: [ ...state.invitationsFromMe, action.payload ] }

    case actions.SAVE_INVITATIONS_FOR_ME:
      return { ...state, invitationsForMe: [ ...action.payload ] }

    case actions.SAVE_INVITATIONS_FROM_ME:
      return { ...state, invitationsFromMe: [ ...action.payload ] }

    case actions.SET_INVITATIONS_LOADING_STATUS:
      return { ...state, invitationsAreLoading: action.payload }

    default: {
      return state
    }
  }
}

export default networkReducer
