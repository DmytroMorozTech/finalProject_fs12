import * as actions from './profileActionTypes'

const initialState = {
  loading: false,
  activeProfile: {} // extended userRs object with many nested fields like educations, certifications, etc.
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_ACTIVE_PROFILE:
      return {
        ...state,
        activeProfile: action.payload
      }

    case actions.LOADING_PROFILE:
      return { ...state, loading: action.payload }

    default: {
      return state
    }
  }
}

export default profileReducer