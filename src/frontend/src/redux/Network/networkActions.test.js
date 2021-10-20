import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import http from '../../services/httpService'
import {
  acceptInvitationAction,
  createNewInvitationAction,
  deleteConnectionAction,
  deleteInvitationAction,
  getInvitationsForMeAction,
  getInvitationsFromMeAction,
  getMyConnectionsAction,
  getPotentialContacts,
  getUsersFollowedAction,
  getUsersFollowingAction,
  toggleUserFollowedAction
} from './networkActions'
import * as networkActionsTypes from './networkActionTypes'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

jest.mock('../../services/httpService', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}))

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

it('testing createNewInvitationAction', async () => {
  const store = mockStore({})
  const userWhomId = 1
  const fullName = 'Richard West'
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(createNewInvitationAction({userWhomId, fullName}))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/invitations', {userWhomId, fullName})

  const actions = store.getActions()

  expect(actions.length).toBe(2)
  expect(actions[0].type).toEqual(networkActionsTypes.DELETE_POTENTIAL_CONTACT)
  expect(actions[0].payload).toEqual(userWhomId)
  expect(actions[1].type).toEqual(networkActionsTypes.ADD_NEW_INVITATION)
  expect(actions[1].payload).toEqual(testResponse)
})

it('testing getInvitationsForMeAction', async () => {
  const store = mockStore({})
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(getInvitationsForMeAction())

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('/api/invitations/for_me')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(networkActionsTypes.SAVE_INVITATIONS_FOR_ME)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing getInvitationsFromMeAction', async () => {
  const store = mockStore({})
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(getInvitationsFromMeAction())

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('/api/invitations/from_me')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(networkActionsTypes.SAVE_INVITATIONS_FROM_ME)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing getMyConnectionsAction', async () => {
  const store = mockStore({})
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(getMyConnectionsAction())

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('/api/users/connections')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(networkActionsTypes.SAVE_MY_CONNECTIONS)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing deleteConnectionAction', async () => {
  const store = mockStore({})
  let activeUserId = 1
  let userWhomId = 2
  const testResponse = 200
  http.delete.mockResolvedValue({ status: testResponse })

  store.dispatch(deleteConnectionAction(activeUserId, userWhomId))

  await flushPromises()

  expect(http.delete).toHaveBeenCalledTimes(1)
  expect(http.delete).toHaveBeenCalledWith('/api/connections/1/2')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(networkActionsTypes.DELETE_CONNECTION)
  expect(actions[0].payload).toEqual(userWhomId)
})

it('testing deleteInvitationAction', async () => {
  const store = mockStore({})
  let id = 1
  const testResponse = 200
  http.delete.mockResolvedValue({ status: testResponse })

  store.dispatch(deleteInvitationAction(id))

  await flushPromises()

  expect(http.delete).toHaveBeenCalledTimes(1)
  expect(http.delete).toHaveBeenCalledWith('/api/invitations/1')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(networkActionsTypes.DELETE_INVITATION)
  expect(actions[0].payload).toEqual(id)
})

it('testing acceptInvitationAction', async () => {
  const store = mockStore({})
  let invitationId = 1
  const testResponse = 200
  http.put.mockResolvedValue({ status: testResponse })

  store.dispatch(acceptInvitationAction(invitationId))

  await flushPromises()

  expect(http.put).toHaveBeenCalledTimes(1)
  expect(http.put).toHaveBeenCalledWith('/api/invitations/accept/1')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(networkActionsTypes.DELETE_INVITATION)
  expect(actions[0].payload).toEqual(invitationId)
})

it('testing getUsersFollowingAction', async () => {
  const store = mockStore({})
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(getUsersFollowingAction())

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('/api/users/following')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(networkActionsTypes.SAVE_USERS_FOLLOWING)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing getUsersFollowedAction', async () => {
  const store = mockStore({})
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(getUsersFollowedAction())

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('/api/users/followed')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(networkActionsTypes.SAVE_USERS_FOLLOWED)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing toggleUserFollowedAction', async () => {
  const store = mockStore({})
  let userId = 1
  let setIsFollowed = jest.fn()
  let isFollowed = true
  const testResponse = 'Test response'
  http.put.mockResolvedValue({ data: testResponse })

  store.dispatch(toggleUserFollowedAction(userId, setIsFollowed, isFollowed))

  await flushPromises()

  expect(http.put).toHaveBeenCalledTimes(1)
  expect(http.put).toHaveBeenCalledWith('/api/users/toggle_follow_user/1')

  const actions = store.getActions()

  expect(actions.length).toBe(0)
})

it('testing getPotentialContacts', async () => {
  const store = mockStore({})
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(getPotentialContacts())

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('/api/users/potential_contacts')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(networkActionsTypes.SAVE_POTENTIAL_CONTACTS)
  expect(actions[0].payload).toEqual(testResponse)
})
