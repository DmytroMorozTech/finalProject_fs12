import React from 'react'
import Connection from './Connection'
import { shallow } from 'enzyme'
import * as redux from 'react-redux'

export const connection = {
  'id': 4,
  'createdDate': '2015-05-11T22:21:12.123123',
  'firstName': 'Everett',
  'lastName': 'Anderson',
  'fullName': 'Everett Anderson',
  'avatarPublicId': 'linkedin/avatars/i1bzhpqac3i1ld2urju8',
  'profileBgPublicId': '',
  'positionAndCompany': 'Project manager at HQSoftware',
  'email': 'test4@gmail.com',
  'isFollowedByActiveUser': true,
  'numberOfFollowers': 4
}

jest.mock('./styles', () => () => ({}))
jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = (props) => shallow(<Connection {...props}/>)

describe('should render Connection component', () => {
  let spyOnUseSelector
  let spyOnUseDispatch
  let mockDispatch

  let component
  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(false)
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp({connection})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
