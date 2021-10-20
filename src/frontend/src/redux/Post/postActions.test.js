import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import http from '../../services/httpService'
import {
  createMessageFromFeed,
  createNewPostAction,
  findSinglePostByIdAction,
  getUsersWhoLikedPostAction,
  modalSendMessage,
  toggleBookmarkAction,
  togglePostLikeGeneralAction,
  togglePostLikeSingleAction
} from './postActions'
import * as postActionTypes from './postActionTypes'

jest.mock('../Modal/modalActions', () => () => ({
  type: 'TEST_MODAL_ACTION'
}))
jest.mock('../Image/imageActions', () => ({
  uploadPostImgAction: jest.fn()
}))
jest.mock('../Video/videoActions', () => ({
  uploadPostVideoAction: jest.fn()
}))

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

jest.mock('../../services/httpService', () => ({
  get: jest.fn(),
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

it('testing getUsersWhoLikedPostAction', async () => {
  const store = mockStore({})
  const id = 1
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(getUsersWhoLikedPostAction(id))

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('/api/users/who_liked_post/1')

  const actions = store.getActions()

  expect(actions.length).toBe(2)
  expect(actions[0].type).toEqual(postActionTypes.SAVE_USERS_WHO_LIKED_POST)
  expect(actions[0].payload).toEqual({ usersList: testResponse, id: id })
  expect(actions[1].type).toEqual('TEST_MODAL_ACTION')
})

it('testing togglePostLikeGeneralAction', async () => {
  const store = mockStore({})
  const id = 1
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(togglePostLikeGeneralAction(id))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/posts/toggle_like/1')

  const actions = store.getActions()

  expect(actions.length).toBe(2)
  expect(actions[0].type).toEqual(postActionTypes.UPDATE_POST)
  expect(actions[0].payload).toEqual(testResponse)
  expect(actions[1].type).toEqual(postActionTypes.UPDATE_BOOKMARKED_POST)
  expect(actions[1].payload).toEqual(testResponse)
})

it('testing togglePostLikeSingleAction', async () => {
  const store = mockStore({})
  const id = 1
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(togglePostLikeSingleAction(id))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/posts/toggle_like/1')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(postActionTypes.SAVE_POST_SINGLE)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing toggleBookmarkAction with posts', async () => {
  const store = mockStore({})
  const id = 1
  const feedType = 'posts'
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(toggleBookmarkAction(id, feedType))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/posts/toggle_bookmark/1')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(postActionTypes.UPDATE_POST)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing toggleBookmarkAction with bookmarkedPosts', async () => {
  const store = mockStore({})
  const id = 1
  const feedType = 'bookmarkedPosts'
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(toggleBookmarkAction(id, feedType))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/posts/toggle_bookmark/1')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(postActionTypes.DELETE_BOOKMARKED_POST)
})

it('testing findSinglePostByIdAction', async () => {
  const store = mockStore({})
  const postId = 1
  const setPostIsLoading = jest.fn()
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(findSinglePostByIdAction(postId, setPostIsLoading))

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('/api/posts/1')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(postActionTypes.SAVE_POST_SINGLE)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing createMessageFromFeed', () => {
  const store = mockStore({})
  const data = 'Test data'
  const testResponse = 200
  http.post.mockResolvedValue({ status: testResponse })

  createMessageFromFeed(data)

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/messages/from_feed', data)

  const actions = store.getActions()

  expect(actions.length).toBe(0)
})

it('testing modalSendMessage', async () => {
  const store = mockStore({})
  const postId = 1
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(modalSendMessage(postId))

  await flushPromises()

  const actions = store.getActions()

  expect(actions.length).toBe(1)
})
