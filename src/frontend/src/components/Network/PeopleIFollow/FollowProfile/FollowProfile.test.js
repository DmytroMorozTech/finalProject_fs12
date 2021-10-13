import { shallow } from 'enzyme'
import FollowProfile from './FollowProfile'
import * as redux from 'react-redux'
import React from 'react'

const user = {
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

const setUp = (props) => shallow(<FollowProfile {...props}/>)

describe('should render PeopleIFollowFollowers component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp({ user })
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
