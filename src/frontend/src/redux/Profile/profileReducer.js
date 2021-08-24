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

    case actions.DELETE_EDUCATION:
      const educationId = action.payload

      const filteredEducations = state.activeProfile.educations.filter(e => e.id !== educationId)

      return {
        ...state,
        activeProfile: {
          ...state.activeProfile,
          educations: [...filteredEducations]
        }
      }

    case actions.DELETE_CERTIFICATION:
      const certificationId = action.payload

      const filteredCertifications = state.activeProfile.certifications.filter(cert => cert.id !== certificationId)

      return {
        ...state,
        activeProfile: {
          ...state.activeProfile,
          certifications: [...filteredCertifications]
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

    case actions.UPDATE_CERTIFICATION:
      const updatedCertification = action.payload

      const currentCertification = state.activeProfile.certifications
        .find((certification) => certification.id === updatedCertification.id)
      if (currentCertification == null) return state

      const indexOfCurrentCertification = state.activeProfile.certifications.indexOf(currentCertification)

      return update(state, {
        activeProfile: {
          certifications: { $splice: [[indexOfCurrentCertification, 1, updatedCertification]] }
        }
      })

    case actions.ADD_NEW_EXPERIENCE:
      return {
        ...state,
        activeProfile: {
          ...state.activeProfile,
          workPlaces: [...state.activeProfile.workPlaces, action.payload]
        }
      }

    case actions.UPDATE_EXPERIENCE:
      const updatedExperience = action.payload

      const currentExperience = state.activeProfile.workPlaces
        .find((workPlace) => workPlace.id === updatedExperience.id)
      if (currentExperience == null) return state

      const indexOfCurrentExperience = state.activeProfile.workPlaces.indexOf(currentExperience)

      return update(state, {
        activeProfile: {
          workPlaces: { $splice: [[indexOfCurrentExperience, 1, updatedExperience]] }
        }
      })

    default: {
      return state
    }
  }
}

export default profileReducer