import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import http from '../../services/httpService'
import { findUserByIdAction, getActiveUserAction, signOutAction } from './userActions'
import * as userActionTypes from './userActionTypes'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

jest.mock('../../services/httpService', () => ({
  get: jest.fn()
}))

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

it('testing getActiveUserAction', async () => {
  const store = mockStore({})
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(getActiveUserAction())

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('/api/active_user')

  const actions = store.getActions()

  expect(actions.length).toBe(3)
  expect(actions[0].type).toEqual(userActionTypes.LOADING_USERS)
  expect(actions[0].payload).toEqual(true)
  expect(actions[1].type).toEqual(userActionTypes.SAVE_ACTIVE_USER)
  expect(actions[1].payload).toEqual(testResponse)
  expect(actions[2].type).toEqual(userActionTypes.LOADING_USERS)
  expect(actions[2].payload).toEqual(false)
})

it('testing signOutAction', async () => {
  const store = mockStore({})
  const testResponse = '/'
  http.get.mockResolvedValue({ testResponse })

  store.dispatch(signOutAction())

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('/logout')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(userActionTypes.SIGN_OUT)
  expect(actions[0].payload).toEqual(null)
})

it('testing findUserByIdAction', async () => {
  const store = mockStore({})
  let id = 1
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(findUserByIdAction(id))

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('/api/users/1')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(userActionTypes.FIND_USER_BY_ID)
  expect(actions[0].payload).toEqual(testResponse)
})
