import * as actions from './certificationActionTypes'
import update from 'immutability-helper'

const initialState = {
  certificationsList: [],
  loading: false,
  pageNumber: 0,
  pageSize: 4,
  totalPages: 0,
  hasMore: true
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING_CERTIFICATION:
      return { ...state, loading: action.payload }

    case actions.SAVE_NEW_CERTIFICATION:
      const { content, size: pageSize, number: pageNumber, last, totalPages } = action.payload
      return {
        ...state,
        certificationsList: [...state.certificationsList, ...content],
        pageNumber: pageNumber + 1,
        pageSize: pageSize,
        totalPages: totalPages,
        hasMore: !last
      }

    case actions.ADD_NEW_CERTIFICATION:
      return { ...state, certificationsList: [...state.certificationsList, action.payload] }

    case actions.UPDATE_CERTIFICATION:
      const updatedCertification = action.payload

      const currentCertification = state.certificationsList.find((certification) => certification.id === updatedCertification.id)

      const indexOfCurrentCertification = state.certificationsList.indexOf(currentCertification)

      return update(state, {
        certificationsList: { $splice: [[indexOfCurrentCertification, 1, updatedCertification]] }
      })
    default: {
      return state
    }
  }
}

export default postReducer