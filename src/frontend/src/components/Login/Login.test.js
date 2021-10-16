import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import Login from './Login'

jest.mock('./styles', () => () => ({}))

describe('should render Login component', () => {
  let spyOnUseSelector

  let component

  const setUp = () => shallow(<Login />)

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(false)

    component = setUp()
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

describe('should render Login component', () => {
  let spyOnUseSelector

  let component

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(true)

    component = shallow(<Login />)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('should render Preloader', () => {
    let wrapper = component.find('Preloader')
    expect(wrapper.length).toBe(1)
  })
})
