import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import http from '../../services/httpService'
import { createNewPostAction } from './postActions'
import * as postActionTypes from './postActionTypes'

jest.mock('../Modal/modalActions', () => () => ({
  type: 'TEST_MODAL_ACTION'
}))
jest.mock('../Image/imageActions', () => () => ({
  type: 'TEST_IMAGE_ACTION'
}))

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

jest.mock('../../services/httpService', () => ({
  post: jest.fn()
}))

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

it('testing createNewPostAction', async () => {
  const store = mockStore({})
  const payload = {text: 'text', image: 'image', video: 'video'}
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(createNewPostAction(payload))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/posts', payload)

  const actions = store.getActions()

  expect(actions.length).toBe(4)
  expect(actions[0].type).toEqual(postActionTypes.POST_IS_BEING_UPLOADED)
  expect(actions[0].payload).toEqual(true)
  expect(actions[1].type).toEqual(postActionTypes.ADD_NEW_POST)
  expect(actions[1].payload).toEqual(testResponse)
  expect(actions[2].type).toEqual('TEST_MODAL_ACTION')
  expect(actions[3].type).toEqual(postActionTypes.POST_IS_BEING_UPLOADED)
  expect(actions[3].payload).toEqual(false)
})
