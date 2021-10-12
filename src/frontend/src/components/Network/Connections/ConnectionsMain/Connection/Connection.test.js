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

const chats = [
  {
    'id': 1,
    'users': [
      {
        'id': 1,
        'createdDate': '2015-01-01T18:22:32.123123',
        'lastModifiedDate': '2021-10-12T00:00:00',
        'firstName': 'Richard',
        'lastName': 'West',
        'headline': 'Java Developer',
        'country': 'USA',
        'city': 'New York',
        'phoneNumber': '+380502926823',
        'email': 'test@gmail.com',
        'age': 20,
        'passwordHash': '$2a$10$VyCoVteS/iZ/5ZYTIGI0EOZEytTbZphdioSm0uXqNCQ29vK6giI0q',
        'avatarPublicId': 'linkedin/avatars/vbalexhudya0ano14pgs',
        'profileBgPublicId': 'linkedin/profile-bg/isgzneqfm5ro1bufycqc',
        'resetPasswordNumber': null,
        'provider': null,
        'fullName': 'Richard West',
        'numberOfFollowers': 2,
        'isFollowedByActiveUser': false,
        'positionAndCompany': 'Sales manager at Microsoft'
      },
      {
        'id': 2,
        'createdDate': '2015-03-03T22:22:32.123123',
        'lastModifiedDate': '2021-10-12T00:00:00',
        'firstName': 'Frank',
        'lastName': 'Jackson',
        'headline': 'Head of Sales Department',
        'country': 'Ukraine',
        'city': 'Kyiv',
        'phoneNumber': '+380674974924',
        'email': 'test2@gmail.com',
        'age': 32,
        'passwordHash': '$2a$10$ihFhDPp8TDs72rrtlD5tIewV7D6dvNGMXatbBz7e9zmrLDsHhai/O',
        'avatarPublicId': 'linkedin/avatars/kgpkn4a4fudfjpebyegx',
        'profileBgPublicId': 'linkedin/profile-bg/iltbrz2s8408pu0xrvsj',
        'resetPasswordNumber': null,
        'provider': null,
        'fullName': 'Frank Jackson',
        'numberOfFollowers': 3,
        'isFollowedByActiveUser': false,
        'positionAndCompany': 'Head of CIS region at Apple'
      }
    ]
  },
  {
    'id': 2,
    'users': [
      {
        'id': 1,
        'createdDate': '2015-01-01T18:22:32.123123',
        'lastModifiedDate': '2021-10-12T00:00:00',
        'firstName': 'Richard',
        'lastName': 'West',
        'headline': 'Java Developer',
        'country': 'USA',
        'city': 'New York',
        'phoneNumber': '+380502926823',
        'email': 'test@gmail.com',
        'age': 20,
        'passwordHash': '$2a$10$VyCoVteS/iZ/5ZYTIGI0EOZEytTbZphdioSm0uXqNCQ29vK6giI0q',
        'avatarPublicId': 'linkedin/avatars/vbalexhudya0ano14pgs',
        'profileBgPublicId': 'linkedin/profile-bg/isgzneqfm5ro1bufycqc',
        'resetPasswordNumber': null,
        'provider': null,
        'fullName': 'Richard West',
        'numberOfFollowers': 2,
        'isFollowedByActiveUser': false,
        'positionAndCompany': 'Sales manager at Microsoft'
      },
      {
        'id': 3,
        'createdDate': '2015-03-23T11:13:12.123123',
        'lastModifiedDate': '2021-10-12T00:00:00',
        'firstName': 'Laura',
        'lastName': 'Lee',
        'headline': 'Senior Java Developer',
        'country': 'Spain',
        'city': 'Barcelona',
        'phoneNumber': '+380677623175',
        'email': 'test3@gmail.com',
        'age': 62,
        'passwordHash': '$2a$10$2xFkfxj1Gx4PbJeqt12.V.dR2./r5fcojGGjtVPRZXa2JvWXuq0Ci',
        'avatarPublicId': 'linkedin/avatars/p1qwriz6hzjgwkaihwpa',
        'profileBgPublicId': 'linkedin/profile-bg/o0ngvhpnbu4bz4moqklt',
        'resetPasswordNumber': null,
        'provider': null,
        'fullName': 'Laura Lee',
        'numberOfFollowers': 3,
        'isFollowedByActiveUser': false,
        'positionAndCompany': 'Head of design Unit at Apple'
      }
    ]
  }
]

const setUp = (props) => shallow(<Connection {...props}/>)

describe('should render Connection component', () => {
  let spyOnUseSelector
  let spyOnUseDispatch
  let mockDispatch

  let component
  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(chats)
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
