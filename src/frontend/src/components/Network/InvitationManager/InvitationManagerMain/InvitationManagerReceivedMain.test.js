import { shallow } from 'enzyme'
import React from 'react'
import InvitationManagerReceivedMain from './InvitationManagerReceivedMain'

const data = [
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

const emptyData = []

let component

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<InvitationManagerReceivedMain {...props}/>)

describe('should render InvitationManagerReceivedMain component with props', () => {
  let numbOfInvReceived = 2

  beforeEach(() => {
    component = setUp(
      {
        numbOfInvReceived,
        data
      }
    )
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should show Invitation', () => {
    const wrapper = component.find('Invitation')
    expect(wrapper.length).toBe(2)
  })
})

describe('should render InvitationManagerReceivedMain component with empty props', () => {
  let numbOfInvReceived = 0

  beforeEach(() => {
    component = setUp(
      {
        numbOfInvReceived,
        emptyData
      }
    )
  })
  it('should show string `No pending invitations`', () => {
    expect.stringContaining('No pending invitations')
  })
})
