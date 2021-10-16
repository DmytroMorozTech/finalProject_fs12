import * as actions from './userActionTypes'

const initialState = {
  loadingUser: false,
  activeUser: {},
  selectedUser: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING_USERS:
      return {
        ...state,
        loadingUser: action.payload
      }

    case actions.SAVE_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload
      }

    case actions.SIGN_OUT:
      localStorage.clear()
      return {
        ...state,
        activeUser: {}
      }

    case actions.FIND_USER_BY_ID:
      return {
        ...state,
        selectedUser: action.payload
      }

    case actions.UPDATE_ACTIVE_USER_PROFILE_BG_IMG:
      const copyOfActiveUser = {...state.activeUser}
      copyOfActiveUser.profileBgPublicId = action.payload

      return {
        ...state,
        activeUser: copyOfActiveUser
      }

    default: {
      return state
    }
  }
}

export default userReducer
