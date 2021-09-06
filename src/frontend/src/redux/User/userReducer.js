import * as actions from './userActionTypes'

const initialState = {
  loadingUser: false,
  activeUser: {},
  currentUser: {}
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
      return {
        ...state,
        activeUser: null
      }

    case actions.FIND_USER_BY_ID:
      return {
        ...state,
        currentUser: action.payload
      }
    default: {
      return state
    }
  }
}

export default userReducer