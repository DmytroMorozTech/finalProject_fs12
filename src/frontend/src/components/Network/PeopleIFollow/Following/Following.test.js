import { shallow } from 'enzyme'
import Following from './Following'
import React from 'react'

const usersFollowedByMe = [
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

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<Following {...props}/>)

describe('should render Following component', () => {
  let component
  beforeEach(() => {
    component = setUp({ usersFollowedByMe })
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
