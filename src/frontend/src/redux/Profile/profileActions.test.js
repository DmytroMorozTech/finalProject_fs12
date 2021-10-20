import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import http from '../../services/httpService'
import {
  createNewCertificationAction,
  createNewEducationAction, createNewWorkPlaceAction, deleteCertificationAction,
  deleteEducationAction, deleteWorkPlaceAction, editIntroAction,
  getActiveProfileAction, updateCertificationAction,
  updateEducationAction, updateWorkPlaceAction
} from './profileActions'
import * as profileActionTypes from './profileActionTypes'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

jest.mock('../../services/httpService', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn()
}))

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

it('testing getActiveProfileAction', async () => {
  const store = mockStore({})
  const userId = 1
  const testResponse = 'Test response'
  http.get.mockResolvedValue({ data: testResponse })

  store.dispatch(getActiveProfileAction(userId))

  await flushPromises()

  expect(http.get).toHaveBeenCalledTimes(1)
  expect(http.get).toHaveBeenCalledWith('../api/users/profiles/1')

  const actions = store.getActions()

  expect(actions.length).toBe(3)
  expect(actions[0].type).toEqual(profileActionTypes.LOADING_PROFILE)
  expect(actions[0].payload).toEqual(true)
  expect(actions[1].type).toEqual(profileActionTypes.SAVE_ACTIVE_PROFILE)
  expect(actions[1].payload).toEqual(testResponse)
  expect(actions[2].type).toEqual(profileActionTypes.LOADING_PROFILE)
  expect(actions[2].payload).toEqual(false)
})

it('testing createNewEducationAction', async () => {
  const store = mockStore({})
  let payload = {startMonth: 'Mar', startYear: '2011', endMonth: 'Oct', endYear: '2014'}
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(createNewEducationAction(payload))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/educations', payload)

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(profileActionTypes.ADD_NEW_EDUCATION)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing updateEducationAction', async () => {
  const store = mockStore({})
  let id = 1
  let payload = {startMonth: 'Mar', startYear: '2011', endMonth: 'Oct', endYear: '2014'}
  const testResponse = 'Test response'
  http.put.mockResolvedValue({ data: testResponse })

  store.dispatch(updateEducationAction(payload, id))

  await flushPromises()

  expect(http.put).toHaveBeenCalledTimes(1)
  expect(http.put).toHaveBeenCalledWith('/api/educations/1', payload)

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(profileActionTypes.UPDATE_EDUCATION)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing deleteEducationAction', async () => {
  const store = mockStore({})
  let id = 1
  const testResponse = 200
  http.delete.mockResolvedValue({ status: testResponse })

  store.dispatch(deleteEducationAction(id))

  await flushPromises()

  expect(http.delete).toHaveBeenCalledTimes(1)
  expect(http.delete).toHaveBeenCalledWith('/api/educations/1')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(profileActionTypes.DELETE_EDUCATION)
  expect(actions[0].payload).toEqual(id)
})

it('testing createNewCertificationAction', async () => {
  const store = mockStore({})
  let payload = {issueDateMonth: 'Jan', issueDateYear: '2016', expirationDateMonth: 'Jan', expirationDateYear: '2026', hasExpiryDate: true}
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(createNewCertificationAction(payload))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/certifications', payload)

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(profileActionTypes.ADD_NEW_CERTIFICATION)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing updateCertificationAction', async () => {
  const store = mockStore({})
  let id = 1
  let payload = {startMonth: 'Mar', startYear: '2011', endMonth: 'Oct', endYear: '2014'}
  const testResponse = 'Test response'
  http.put.mockResolvedValue({ data: testResponse })

  store.dispatch(updateCertificationAction(payload, id))

  await flushPromises()

  expect(http.put).toHaveBeenCalledTimes(1)
  expect(http.put).toHaveBeenCalledWith('/api/certifications/1', payload)

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(profileActionTypes.UPDATE_CERTIFICATION)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing deleteCertificationAction', async () => {
  const store = mockStore({})
  let id = 1
  const testResponse = 200
  http.delete.mockResolvedValue({ status: testResponse })

  store.dispatch(deleteCertificationAction(id))

  await flushPromises()

  expect(http.delete).toHaveBeenCalledTimes(1)
  expect(http.delete).toHaveBeenCalledWith('/api/certifications/1')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(profileActionTypes.DELETE_CERTIFICATION)
  expect(actions[0].payload).toEqual(id)
})

it('testing createNewWorkPlaceAction', async () => {
  const store = mockStore({})
  let payload = {startMonth: 'Mar', startYear: '2011', endMonth: 'Oct', endYear: '2014', organizationId: 2}
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  store.dispatch(createNewWorkPlaceAction(payload))

  await flushPromises()

  expect(http.post).toHaveBeenCalledTimes(1)
  expect(http.post).toHaveBeenCalledWith('/api/work-places/2', payload)

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(profileActionTypes.ADD_NEW_EXPERIENCE)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing updateWorkPlaceAction', async () => {
  const store = mockStore({})
  let workPlaceId = 3
  let payload = {startMonth: 'Mar', startYear: '2011', endMonth: 'Oct', endYear: '2014'}
  const testResponse = 'Test response'
  http.put.mockResolvedValue({ data: testResponse })

  store.dispatch(updateWorkPlaceAction(payload, workPlaceId))

  await flushPromises()

  expect(http.put).toHaveBeenCalledTimes(1)
  expect(http.put).toHaveBeenCalledWith('/api/work-places/3', payload)

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(profileActionTypes.UPDATE_EXPERIENCE)
  expect(actions[0].payload).toEqual(testResponse)
})

it('testing deleteWorkPlaceAction', async () => {
  const store = mockStore({})
  let id = 1
  const testResponse = 200
  http.delete.mockResolvedValue({ status: testResponse })

  store.dispatch(deleteWorkPlaceAction(id))

  await flushPromises()

  expect(http.delete).toHaveBeenCalledTimes(1)
  expect(http.delete).toHaveBeenCalledWith('/api/work-places/1')

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(profileActionTypes.DELETE_EXPERIENCE)
  expect(actions[0].payload).toEqual(id)
})

it('testing editIntroAction', async () => {
  const store = mockStore({})
  let payload = {'id': 1, 'createdDate': '2015-01-01T18:22:32.123123', 'firstName': 'Richard', 'lastName': 'West', 'headline': 'Java Developer', 'country': 'USA', 'city': 'New York', 'fullName': 'Richard West', 'avatarPublicId': 'linkedin/avatars/qxfjsjymm69qp5wbpeio', 'profileBgPublicId': 'linkedin/profile-bg/isgzneqfm5ro1bufycqc', 'positionAndCompany': 'Sales manager at Microsoft', 'phoneNumber': '+380502926823', 'age': '20', 'email': 'test@gmail.com', 'groups': [], 'workPlaces': [{'id': 1, 'position': 'Chief Operational Officer', 'responsibilities': 'Quisque id rhoncus mauris. Phasellus quis diam aliquet, gravida massa in, suscipit felis. Aliquam ac turpis arcu. Nunc fermentum dui augue, et aliquam eros ullamcorper imperdiet.', 'dateStart': '2000-12-31', 'dateFinish': '2010-06-12', 'isCurrentlyEmployed': false, 'organization': {'id': 3, 'name': 'PayPal Holdings Inc.', 'location': '2211 N 1st St, San Jose, CA 95131, United States', 'webSite': 'www.paypal.com'}}, {'id': 2, 'position': 'CEO', 'responsibilities': 'Fusce lacinia, nisl et vestibulum ultricies, orci risus luctus urna, et consectetur sem nibh non mauris. Phasellus ac aliquam libero, eu luctus lorem. Nulla tempor risus eu tortor mattis, id eleifend tellus semper. ', 'dateStart': '2010-06-20', 'dateFinish': '2013-11-22', 'isCurrentlyEmployed': false, 'organization': {'id': 2, 'name': 'Apple', 'location': '1 Apple Park Way Cupertino, California, 95014-0642 United States', 'webSite': 'apple.com'}}, {'id': 3, 'position': 'Sales manager', 'responsibilities': 'Phasellus vitae interdum mauris, eget luctus neque. Aenean at venenatis mauris, venenatis convallis velit. Suspendisse hendrerit lectus dolor, sit amet tristique odio lobortis sit amet. Donec ante purus, ', 'dateStart': '2014-01-20', 'dateFinish': null, 'isCurrentlyEmployed': true, 'organization': {'id': 1, 'name': 'Microsoft', 'location': 'Redmond, WA, US (HQ) Microsoft Corporation One Microsoft Way', 'webSite': 'microsoft.com'}}], 'educations': [{'id': 3, 'school': 'MIT', 'degreeReceived': 'Bachelor', 'activities': 'Working hard; Writing scientifica articles', 'description': 'High-level of education; nice capmus; ...', 'fieldOfStudy': 'Electronics', 'dateStart': '2011-03-03', 'dateFinish': '2015-04-04'}, {'id': 4, 'school': 'Michigan state University', 'degreeReceived': 'Msc', 'activities': 'Doing mathematical calculations all day long', 'description': 'Best calculus ever', 'fieldOfStudy': 'Math', 'dateStart': '2017-03-03', 'dateFinish': '2019-03-03'}], 'certifications': [{'id': 1, 'name': 'Spring data jpa', 'issuingOrganization': 'DAN-IT', 'hasExpiryDate': true, 'issueDate': '2016-01-01', 'expirationDate': '2026-01-01', 'credentialId': 'PS35092', 'credentialUrl': 'https://dan-it.com.ua'}, {'id': 2, 'name': 'On-site practice', 'issuingOrganization': 'Unilever', 'hasExpiryDate': false, 'issueDate': '2017-07-08', 'expirationDate': null, 'credentialId': 'RQ3627AS', 'credentialUrl': 'https://unilever.ua'}], 'isFollowedByActiveUser': false, 'numberOfFollowers': 0}
  const testResponse = 'Test response'
  http.put.mockResolvedValue({ data: testResponse })

  store.dispatch(editIntroAction(payload))

  await flushPromises()

  expect(http.put).toHaveBeenCalledTimes(1)
  expect(http.put).toHaveBeenCalledWith('/api/users/profiles/intro', payload)

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(profileActionTypes.SAVE_ACTIVE_PROFILE)
  expect(actions[0].payload).toEqual(testResponse)
})
