import http from '../../services/httpService'
import * as actions from './notificationActionTypes'
import { toast } from 'react-toastify'

export const markNotificationAsViewedAction = (payload) => (dispatch) => {
  const id = payload

  return http
    .put(`/api/notifications/mark_as_viewed/${id}`)
    .then((res) => res.data)
    .then((newNotificationObj) => {
      dispatch({ type: actions.MARK_NOTIFICATION_AS_VIEWED, payload: newNotificationObj })
    })
}

export const deleteNotificationAction = (id) => (dispatch) => {
  return http
    .delete(`/api/notifications/${id}`)
    .then((res) => res.status)
    .then((status) => {
      if (status === 200 || status === 204) {
        dispatch({ type: actions.DELETE_NOTIFICATION, payload: id })
      }
    })
}

export const markAllNotificationsAsViewedAction = () => (dispatch) => {
  return http
    .put(`/api/notifications/mark_as_viewed/all`)
    .then((res) => res.status)
    .then((status) => {
      if (status === 200 || status === 204) {
        dispatch({ type: actions.MARK_ALL_NOTIFICATIONS_AS_VIEWED })
        toast.info('You have marked all notifications as viewed',
          {position: toast.POSITION.TOP_RIGHT, autoClose: 1700})
      }
    })
}
