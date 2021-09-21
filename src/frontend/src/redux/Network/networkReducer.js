import * as actions from '../Network/networkActionTypes'

const initialState = {
  invitationsForMe: [],
  invitationsFromMe: [],
  usersFollowingMe: [],
  usersFollowedByMe: [],
  connections: []
}

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NEW_INVITATION:
      return { ...state, invitationsFromMe: [ ...state.invitationsFromMe, action.payload ] }

    case actions.SAVE_INVITATIONS_FOR_ME:
      return { ...state, invitationsForMe: [...action.payload] }

    case actions.SAVE_INVITATIONS_FROM_ME:
      return { ...state, invitationsFromMe: [...action.payload] }

    case actions.DELETE_INVITATION:
      const invitationId = action.payload
      const invitationsForMeUpdated = state.invitationsForMe.filter(inv => inv.id !== invitationId)
      const invitationsFromMeUpdated = state.invitationsFromMe.filter(inv => inv.id !== invitationId)
      return { ...state,
        invitationsForMe: [...invitationsForMeUpdated],
        invitationsFromMe: [...invitationsFromMeUpdated]
      }

    case actions.DELETE_CONNECTION:
      const connectedUserId = action.payload
      const filteredConnections = state.connections.filter(connection => connection.id !== connectedUserId)
      return { ...state, connections: [...filteredConnections]
      }

    case actions.SAVE_MY_CONNECTIONS:
      return { ...state, connections: [...action.payload] }

    case actions.SAVE_USERS_FOLLOWING:
      return { ...state, usersFollowingMe: [...action.payload] }

    case actions.SAVE_USERS_FOLLOWED:
      return { ...state, usersFollowedByMe: [...action.payload] }

    default: {
      return state
    }
  }
}

export default networkReducer
