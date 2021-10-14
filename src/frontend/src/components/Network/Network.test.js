import React from 'react'
import Network from './Network'
import { shallow } from 'enzyme'
import * as redux from 'react-redux'

const setUp = () => shallow(<Network />)

describe('should render Network component', () => {
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
})
