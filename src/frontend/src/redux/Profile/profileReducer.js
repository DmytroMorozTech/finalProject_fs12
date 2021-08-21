import * as actions from './profileActionTypes'
import update from 'immutability-helper'

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

    case actions.UPDATE_EDUCATION:
      const updatedEducation = action.payload

      const currentEducation = state.activeProfile.educations
        .find((education) => education.id === updatedEducation.id)
      if (currentEducation == null) return state

      const indexOfCurrentEducation = state.activeProfile.educations.indexOf(currentEducation)

      return update(state, {
        activeProfile: {
          educations: { $splice: [[indexOfCurrentEducation, 1, updatedEducation]] }
        }
      })

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