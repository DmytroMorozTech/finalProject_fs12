import { shallow } from 'enzyme'
import React from 'react'
import NotificationsLeft from './NotificationsLeft'
import * as redux from 'react-redux'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<NotificationsLeft />)

describe('should render NotificationsLeft component', () => {
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

    component = setUp()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('should work markAllNotificationsAsViewedAction dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('SharedButton').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
