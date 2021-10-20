import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as commentActionTypes from '../Comment/commentActionTypes'
import http from '../../services/httpService'
import { createNewCommentAction, getUsersWhoLikedCommentAction, toggleCommentLikeAction } from './commentActions'
import {
  INCREMENT_COMMENTS_COUNTER_FOR_POST_GENERAL,
  INCREMENT_COMMENTS_COUNTER_FOR_POST_SINGLE
} from '../Post/postActionTypes'
import { USERS_WHO_LIKED_COMMENT } from '../Modal/modalTypes'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

jest.mock('../../services/httpService', () => ({
  get: jest.fn(),
  post: jest.fn()
}))

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

it('testing createNewCommentAction with singlePostRender: false', async () => {
  const store = mockStore({})
  const testComment = { text: 'Test comment', id: 111, singlePostRender: false }
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(createNewCommentAction(testComment))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/comments', { text: testComment.text, postId: testComment.id })

  const actions = store.getActions()

  expect(actions.length).toBe(2)
  expect(actions[0].type).toEqual(commentActionTypes.ADD_NEW_COMMENT_FOR_POST)
  expect(actions[0].payload).toEqual({ comment: testResponse, postId: testComment.id })
  expect(actions[1].type).toEqual(INCREMENT_COMMENTS_COUNTER_FOR_POST_GENERAL)
  expect(actions[1].payload).toEqual({ postId: testComment.id })
})

it('testing createNewCommentAction with singlePostRender: true', async () => {
  const store = mockStore({})
  const testComment = { text: 'Test comment', id: 111, singlePostRender: true }
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(createNewCommentAction(testComment))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/comments', { text: testComment.text, postId: testComment.id })

  const actions = store.getActions()

  expect(actions.length).toBe(2)
  expect(actions[0].type).toEqual(commentActionTypes.ADD_NEW_COMMENT_FOR_POST)
  expect(actions[0].payload).toEqual({ comment: testResponse, postId: testComment.id })
  expect(actions[1].type).toEqual(INCREMENT_COMMENTS_COUNTER_FOR_POST_SINGLE)
})

it('testing toggleCommentLikeAction', async () => {
  const store = mockStore({})
  const commentId = 222
  const postId = 111
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(toggleCommentLikeAction(commentId, postId))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/comments/toggle_like/222')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(commentActionTypes.UPDATE_COMMENT)
  expect(actions[0].payload).toEqual({ comment: testResponse, postId: postId })
})

it('testing getUsersWhoLikedCommentAction', async () => {
  const store = mockStore({})
  const commentId = 222
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(getUsersWhoLikedCommentAction(commentId))

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('/api/users/who_liked_comment/222')

  const actions = store.getActions()

  expect(actions.length).toBe(2)
  expect(actions[0].type).toEqual(commentActionTypes.SAVE_USERS_WHO_LIKED_COMMENT)
  expect(actions[0].payload).toEqual({ usersList: testResponse, commentId: commentId })
  expect(actions[1].payload).toEqual({ modalType: USERS_WHO_LIKED_COMMENT, commentId: commentId })
})
