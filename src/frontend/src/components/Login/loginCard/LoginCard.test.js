import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import LoginCard from './LoginCard'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<LoginCard />)

describe('should render LoginCard component', () => {
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
  // it('should work dispatch getActiveUser', () => {
  //   expect(mockDispatch).toHaveBeenCalledTimes(0)
  //   component.find('form').simulate('submit')
  //   expect(mockDispatch).toHaveBeenCalledTimes(1)
  // })
})
