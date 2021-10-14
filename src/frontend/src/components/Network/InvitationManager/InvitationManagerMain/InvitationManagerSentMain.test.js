import { shallow } from 'enzyme'
import React from 'react'
import InvitationManagerSentMain from './InvitationManagerSentMain'

const data = [
  {
    'id': 1,
    'createdDate': '2015-01-01T18:22:32.123123',
    'text': '',
    'userWho': {
      'id': 1,
      'fullName': 'Richard West',
      'avatarPublicId': 'linkedin/avatars/vbalexhudya0ano14pgs',
      'positionAndCompany': 'Sales manager at Microsoft'
    },
    'userWhom': {
      'id': 2,
      'fullName': 'Frank Jackson',
      'avatarPublicId': 'linkedin/avatars/kgpkn4a4fudfjpebyegx',
      'positionAndCompany': 'Head of CIS region at Apple'
    }
  },
  {
    'id': 2,
    'createdDate': '2016-01-01T18:22:32.123123',
    'text': '',
    'userWho': {
      'id': 1,
      'fullName': 'Richard West',
      'avatarPublicId': 'linkedin/avatars/vbalexhudya0ano14pgs',
      'positionAndCompany': 'Sales manager at Microsoft'
    },
    'userWhom': {
      'id': 3,
      'fullName': 'Laura Lee',
      'avatarPublicId': 'linkedin/avatars/p1qwriz6hzjgwkaihwpa',
      'positionAndCompany': 'Head of design Unit at Apple'
    }
  },
  {
    'id': 3,
    'createdDate': '2016-02-01T18:22:32.123123',
    'text': '',
    'userWho': {
      'id': 1,
      'fullName': 'Richard West',
      'avatarPublicId': 'linkedin/avatars/vbalexhudya0ano14pgs',
      'positionAndCompany': 'Sales manager at Microsoft'
    },
    'userWhom': {
      'id': 4,
      'fullName': 'Everett Anderson',
      'avatarPublicId': 'linkedin/avatars/i1bzhpqac3i1ld2urju8',
      'positionAndCompany': 'Project manager at HQSoftware'
    }
  }
]

const emptyData = []

let component

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<InvitationManagerSentMain {...props}/>)

describe('should render InvitationManagerSentMain component with props', () => {
  let numberOfInvSent = 3

  beforeEach(() => {
    component = setUp(
      {
        numberOfInvSent,
        data
      }
    )
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should show Invitation', () => {
    const wrapper = component.find('Invitation')
    expect(wrapper.length).toBe(3)
  })
})

describe('should render InvitationManagerSentMain component with empty props', () => {
  let numberOfInvSent = 0

  beforeEach(() => {
    component = setUp(
      {
        numberOfInvSent,
        emptyData
      }
    )
  })
  it('should show string `No pending invitations`', () => {
    expect.stringContaining('No pending invitations')
  })
})
