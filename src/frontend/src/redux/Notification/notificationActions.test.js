import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import http from '../../services/httpService'
import {
  deleteNotificationAction,
  markAllNotificationsAsViewedAction,
  markNotificationAsViewedAction
} from './notificationActions'
import * as notificationActionTypes from './notificationActionTypes'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

jest.mock('../../services/httpService', () => ({
  put: jest.fn(),
  delete: jest.fn()
}))

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

it('testing markNotificationAsViewedAction', async () => {
  const store = mockStore({})
  const id = 123
  const testResponse = 'Test response'
  http.put.mockResolvedValue({ data: testResponse })

  store.dispatch(markNotificationAsViewedAction(id))

  await flushPromises()

  expect(http.put).toHaveBeenCalledTimes(1)
  expect(http.put).toHaveBeenCalledWith('/api/notifications/mark_as_viewed/123')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(notificationActionTypes.MARK_NOTIFICATION_AS_VIEWED)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing deleteNotificationAction', async () => {
  const store = mockStore({})
  const id = 123
  const testResponse = 200
  http.delete.mockResolvedValue({ status: testResponse })

  store.dispatch(deleteNotificationAction(id))

  await flushPromises()

  expect(http.delete).toHaveBeenCalledTimes(1)
  expect(http.delete).toHaveBeenCalledWith('/api/notifications/123')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(notificationActionTypes.DELETE_NOTIFICATION)
  expect(actions[0].payload).toEqual(id)
})

it('testing markAllNotificationsAsViewedAction', async () => {
  const store = mockStore({})
  const testResponse = 200
  http.put.mockResolvedValue({ status: testResponse })

  store.dispatch(markAllNotificationsAsViewedAction())

  await flushPromises()

  expect(http.put).toHaveBeenCalledTimes(1)
  expect(http.put).toHaveBeenCalledWith('/api/notifications/mark_as_viewed/all')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(notificationActionTypes.MARK_ALL_NOTIFICATIONS_AS_VIEWED)
})
