import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import Invitation from './Invitation'

const invitationReceived = {
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
}

const invitationSent = {
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
}

jest.mock('./styles', () => () => ({}))
jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = (props) => shallow(<Invitation {...props}/>)

describe('should render Received Invitation component is not Manage and is not NewInvitation', () => {
  let spyOnUseDispatch
  let mockDispatch

  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp({data: invitationReceived, isReceived: true, isManage: false})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('should work accept dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('SharedButton').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
  it('should work delete dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('SharedLinkSquare').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})

describe('should render Received Invitation component is Manage and is NewInvitation', () => {
  let spyOnUseDispatch
  let mockDispatch

  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp({data: invitationReceived, isReceived: true, isManage: true, isNewInvitation: true})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('should not show RadioButtonUncheckedIcon', () => {
    let wrapper = component.find('RadioButtonUncheckedIcon')
    expect(wrapper.length).toBe(0)
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

describe('should render Sent Invitation component is Manage and is not NewInvitation', () => {
  let spyOnUseDispatch
  let mockDispatch

  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp({data: invitationSent, isReceived: false, isManage: true})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('should show SharedLinkSquare with title Withdraw', () => {
    let wrapper = component.find('SharedLinkSquare[title=\'Withdraw\']')
    expect(wrapper.length).toBe(1)
  })
})
