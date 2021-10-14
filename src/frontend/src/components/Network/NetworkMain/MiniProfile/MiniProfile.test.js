import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import MiniProfile from './MiniProfile'

const user = {
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
}

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<MiniProfile {...props}/>)

describe('should render MiniProfile component', () => {
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
  it('should work dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('SharedButton').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
