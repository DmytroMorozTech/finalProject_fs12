import * as actions from './userActionTypes'

const initialState = {
  loadingUser: false,
  activeUser: {},
  educations: [],
  certifications: [],
  workPlaces: []
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
        activeUser: action.payload
      }

    case actions.ADD_NEW_EDUCATION:
      return { ...state, educations: [ ...state.educations, action.payload ] }

    default: {
      return state
    }
  }
}

export default userReducer