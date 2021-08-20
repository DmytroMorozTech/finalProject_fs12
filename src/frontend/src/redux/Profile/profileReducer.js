import * as actions from './profileActionTypes'

const initialState = {
  loading: true,
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

    case actions.ADD_NEW_EDUCATION:
      return {
        ...state,
        activeProfile: {
          ...state.activeProfile,
          educations: [...state.activeProfile.educations, action.payload]
        }
      }

    case actions.ADD_NEW_CERTIFICATION:
      return {
        ...state,
        activeProfile: {
          ...state.activeProfile,
          certifications: [...state.activeProfile.certifications, action.payload]
        }
      }

    default: {
      return state
    }
  }
}

export default profileReducer