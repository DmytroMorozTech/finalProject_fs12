import { shallow } from 'enzyme'
import React from 'react'
import RegisterGooglePage from './RegisterGooglePage'
import * as redux from 'react-redux'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<RegisterGooglePage />)

describe('should render RegisterGooglePage component', () => {
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
  it('should work dispatch sign out', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('Link[id=\'signOut\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
  it('should work dispatch sign in', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('Link[id=\'signIn\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
