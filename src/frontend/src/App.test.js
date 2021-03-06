import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import * as redux from 'react-redux'

const setUp = (props) => shallow(<App {...props} />)

describe('should render App component', () => {
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

  it('should contain div wrapper', () => {
    const wrapper = component.find('div')
    expect(wrapper.length).toBe(1)
  })

  it('should work dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})

describe('should render App component', () => {
  let spyOnUseSelector
  let spyOnUseDispatch
  let mockDispatch

  let component

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(true)
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should contain Preloader wrapper', () => {
    const wrapper = component.find('Preloader')
    expect(wrapper.length).toBe(1)
  })
})
