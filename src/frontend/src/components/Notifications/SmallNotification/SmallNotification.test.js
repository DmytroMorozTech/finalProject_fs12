import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import SmallNotification from './SmallNotification'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<SmallNotification />)

describe('should render SmallNotification component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let component

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp()
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should work markAllNotificationsAsViewed dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('div[id=\'markAllNotificationsAsViewed\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
