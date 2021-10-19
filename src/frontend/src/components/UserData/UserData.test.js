import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import UserData from './UserData'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<UserData/>)

describe('should render UserData component', () => {
  let spyOnUseSelector
  let spyOnUseDispatch
  let mockDispatch

  let activeUser

  let component

  beforeEach(() => {
    activeUser = {id: 1}

    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(activeUser)
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
  it('should work post like dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('SharedButton[id=\'SignOut\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
