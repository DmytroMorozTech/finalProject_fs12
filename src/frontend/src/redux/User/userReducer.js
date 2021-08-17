import * as actions from './userActionTypes'

const initialState = {
  activeUser: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.payload
      }
    default: {
      return state
    }
  }
}

export default userReducer