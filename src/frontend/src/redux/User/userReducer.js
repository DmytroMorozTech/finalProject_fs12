import * as actions from './userActionTypes'

const initialState = {
  loadingUser: false,
  activeUser: {},
  currentUser: {},
  authenticated: true
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
        authenticated: false
      }
    case actions.FIND_USER_BY_ID:
      return {
        ...state,
        currentUser: action.payload
      }
    case actions.AUTHENTICATE:
      return {
        ...state,
        authenticated: true
      }
    default: {
      return state
    }
  }
}

export default userReducer