import { shallow } from 'enzyme'
import Followers from './Followers'
import React from 'react'

const usersFollowingMe = [
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

const setUp = (props) => shallow(<Followers {...props}/>)

describe('should render Followers component', () => {
  let component
  beforeEach(() => {
    component = setUp({ usersFollowingMe })
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
