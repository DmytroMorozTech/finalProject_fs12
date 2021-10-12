import * as actions from './notificationActionTypes'

const initialState = {
  notificationsList: [],
  loading: false,
  pagination: {
    pageNumber: 0,
    pageSize: 8,
    totalPages: 0,
    hasMore: true
  }
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING_NOTIFICATIONS:
      return { ...state, loading: action.payload }

    case actions.SAVE_NEW_NOTIFICATIONS:
      const { notifications, headers } = action.payload
      const {pagenumber = 0, pagesize = 4, totalpages, hasmore} = headers
      return {
        ...state,
        notificationsList: [...state.notificationsList, ...notifications],
        pagination: {
          pageNumber: parseInt(pagenumber) + 1,
          pageSize: parseInt(pagesize),
          totalPages: parseInt(totalpages),
          hasMore: hasmore === 'true'
        }
      }

    default: {
      return state
    }
  }
}

export default notificationReducer
