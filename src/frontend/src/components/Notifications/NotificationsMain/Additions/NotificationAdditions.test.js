import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import NotificationAdditions from './NotificationAdditions'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<NotificationAdditions {...props}/>)

describe('should render NotificationAdditions component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let notificationId
  let isViewed

  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    notificationId = 1
    isViewed = true

    component = setUp({notificationId, isViewed})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('should work markNotificationAsViewedAction dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('WithStyles(ForwardRef(MenuItem))[id=\'markAsViewed\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })

  it('should work deleteNotificationAction dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('WithStyles(ForwardRef(MenuItem))[id=\'delete\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
