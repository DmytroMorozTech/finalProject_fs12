import React from 'react'
import ConnectionsMain from './ConnectionsMain'
import { shallow } from 'enzyme'
import * as redux from 'react-redux'

jest.mock('react-router-dom', () => ({
  Link: 'a'
}))
jest.mock('./styles', () => () => ({}))

export const connections = [
  {
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
  },
  {
    'id': 7,
    'createdDate': '2016-03-04T09:33:31.123123',
    'firstName': 'Connie',
    'lastName': 'Johnston',
    'fullName': 'Connie Johnston',
    'avatarPublicId': 'linkedin/avatars/ob8gmrldzy35dytcib5t',
    'profileBgPublicId': '',
    'positionAndCompany': 'Full-stack developer at Amazon.com',
    'email': 'test7@gmail.com',
    'isFollowedByActiveUser': true,
    'numberOfFollowers': 1
  }
]

const setUp = (props) => shallow(<ConnectionsMain {...props}/>)

describe('should render ConnectionsMain component', () => {
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

    component = setUp({connections})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
