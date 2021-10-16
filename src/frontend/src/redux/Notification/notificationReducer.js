import * as actions from './notificationActionTypes'
import update from 'immutability-helper'

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

    case actions.MARK_NOTIFICATION_AS_VIEWED:
      const updatedNotification = action.payload

      const currentNotification = state.notificationsList
        .find((notification) => notification.id === updatedNotification.id)
      if (currentNotification === null) return state

      const indexOfCurrentNotif = state.notificationsList.indexOf(currentNotification)

      return update(state, {
        notificationsList: { $splice: [[indexOfCurrentNotif, 1, updatedNotification]] }
      })

    case actions.MARK_ALL_NOTIFICATIONS_AS_VIEWED:
      const updatedNotificationsList = [...state.notificationsList]
      updatedNotificationsList.forEach(n => n.isViewed = true)

      return { ...state, notificationsList: [...updatedNotificationsList] }

    case actions.DELETE_NOTIFICATION:
      const id = action.payload
      const updatedNotificationsList1 = state.notificationsList.filter((notification) => notification.id !== id)
      return { ...state, notificationsList: [...updatedNotificationsList1] }

    case actions.RESET_NOTIFICATIONS:
      return { ...initialState }

    default: {
      return state
    }
  }
}

export default notificationReducer
