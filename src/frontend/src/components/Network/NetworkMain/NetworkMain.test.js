import { shallow } from 'enzyme'
import React from 'react'
import NetworkMain from './NetworkMain'

const invitations = [
  {
    'id': 4,
    'createdDate': '2016-03-01T18:22:32.123123',
    'text': '',
    'userWho': {
      'id': 5,
      'fullName': 'Katherine McCarthy',
      'avatarPublicId': 'linkedin/avatars/hj8sulgxxo5ywotggkcy',
      'positionAndCompany': 'HR-consultant at Amazon.com'
    },
    'userWhom': {
      'id': 1,
      'fullName': 'Richard West',
      'avatarPublicId': 'linkedin/avatars/vbalexhudya0ano14pgs',
      'positionAndCompany': 'Sales manager at Microsoft'
    }
  },
  {
    'id': 5,
    'createdDate': '2016-04-01T18:22:32.123123',
    'text': '',
    'userWho': {
      'id': 6,
      'fullName': 'James Ford',
      'avatarPublicId': 'linkedin/avatars/oevdjvez2wqekez5zbyp',
      'positionAndCompany': 'Lead QA engineer at HQSoftware'
    },
    'userWhom': {
      'id': 1,
      'fullName': 'Richard West',
      'avatarPublicId': 'linkedin/avatars/vbalexhudya0ano14pgs',
      'positionAndCompany': 'Sales manager at Microsoft'
    }
  },
  {
    'id': 6,
    'createdDate': '2016-05-01T18:22:32.123123',
    'text': '',
    'userWho': {
      'id': 9,
      'fullName': 'Leonard Sanders',
      'avatarPublicId': 'linkedin/avatars/urdz0mmjsvxwq7qfyuhm',
      'positionAndCompany': 'Senior Java developer at Amazon.com'
    },
    'userWhom': {
      'id': 1,
      'fullName': 'Richard West',
      'avatarPublicId': 'linkedin/avatars/vbalexhudya0ano14pgs',
      'positionAndCompany': 'Sales manager at Microsoft'
    }
  }
]
const potentialContacts = [
  {
    'id': 10,
    'createdDate': '2016-07-08T12:22:23.123123',
    'firstName': 'Barry',
    'lastName': 'Evans',
    'fullName': 'Barry Evans',
    'avatarPublicId': 'linkedin/avatars/vnxm3wl3erio9ajtezlr',
    'profileBgPublicId': '',
    'positionAndCompany': 'Scala developer at Amazon.com',
    'email': 'test10@gmail.com',
    'isFollowedByActiveUser': false,
    'numberOfFollowers': 0
  },
  {
    'id': 8,
    'createdDate': '2016-05-05T07:21:31.123123',
    'firstName': 'Susan',
    'lastName': 'Anderson',
    'fullName': 'Susan Anderson',
    'avatarPublicId': 'linkedin/avatars/okktjt3pedvcz3zemwor',
    'profileBgPublicId': '',
    'positionAndCompany': 'Node.js developer at Oracle corporation',
    'email': 'test8@gmail.com',
    'isFollowedByActiveUser': false,
    'numberOfFollowers': 1
  }
]

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<NetworkMain {...props}/>)

describe('should render NetworkMain component when invitations is', () => {
  let component
  beforeEach(() => {
    component = setUp({
      invitations,
      potentialContacts
    })
  })
  it('should show string `Invitations`', () => {
    expect.stringContaining('Invitations')
  })
  it('should render with Invitations', () => {
    const wrapper = component.find('Invitation')
    expect(wrapper.length).toBeGreaterThan(0)
  })
})

describe('should render NetworkMain component when no pending invitations', () => {
  let component
  beforeEach(() => {
    component = setUp({
      invitations: [],
      potentialContacts: []
    })
  })
  it('should show string `No pending invitations`', () => {
    expect.stringContaining('No pending invitations')
  })
  it('should show Invitation', () => {
    const wrapper = component.find('Invitation')
    expect(wrapper.length).toBe(0)
  })
})
