import * as actions from './userActionTypes'

const initialState = {
  hasAuthentication: false,
  activeUser: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.HAS_AUTHENTICATION:
      return {
        ...state,
        hasAuthentication: action.payload
      }
    case actions.SAVE_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload
      }
    case actions.SIGN_OUT:
      localStorage.clear()
      window.location.href = '/'
      return {
        ...state,
        activeUser: action.payload,
        hasAuthentication: false
      }
    default: {
      return state
    }
  }
}

export default userReducer