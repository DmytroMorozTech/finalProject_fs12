import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import http from '../../services/httpService'
import { uploadAvatarImgAction } from './imageActions'
import * as profileActionTypes from '../Profile/profileActionTypes'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

jest.mock('../../services/httpService', () => ({
  get: jest.fn(),
  post: jest.fn()
}))

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

it('testing uploadAvatarImgAction', async () => {
  const store = mockStore({})
  const testImage = {
    name: 'car.jpg',
    size: 7110,
    type: 'image/jpeg'}
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(uploadAvatarImgAction(testImage))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)

  const actions = store.getActions()

  expect(actions.length).toBe(3)
  expect(actions[0].type).toEqual(profileActionTypes.SAVE_ACTIVE_PROFILE)
  expect(actions[0].payload).toEqual(testResponse)
})
