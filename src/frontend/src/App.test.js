// import {render, screen} from '@testing-library/react'
import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import { getActiveUserAction } from './redux/User/userActions'

const setUp = (props) => shallow(<App {...props} />)

describe('should render App component', () => {
  let spyOnUseSelector
  let spyOnUseDispatch
  let mockDispatch = jest.fn()

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

  it('should contain div wrapper', () => {
    const wrapper = component.find('div')
    expect(wrapper.length).toBe(1)
  })

  it('should work dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledWith(getActiveUserAction())
  })
})

// const mockDispatch = jest.fn()
// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
//   useDispatch: () => mockDispatch
// }))

// describe('dispatch mock', function () {
//   it('should mock dispatch', function () {
//     // arrange
//     const useDispatchSpy = jest.spyOn(redux, 'useDispatch')
//     const mockDispatchFn = jest.fn()
//     useDispatchSpy.mockReturnValue(mockDispatchFn)
//
//     // action
//     // triggerYourFlow()
//
//     // assert
//     expect(mockDispatchFn).toHaveBeenCalledWith(getActiveUserAction())
//
//     // teardown
//     useDispatchSpy.mockClear()
//   })
// })
// it('loads data on init', () => {
//   const mockedDispatch = jest.fn()
//   useSelector.mockImplementation((selectorFn) => selectorFn(store))
//   useDispatch.mockReturnValue(mockedDispatch)
//   // mount(<Router><Clients history={historyMock} /></Router>)
//   expect(mockDispatch).toHaveBeenCalledWith()
// })
