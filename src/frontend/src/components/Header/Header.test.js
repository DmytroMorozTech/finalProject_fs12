import React from 'react'
import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import Header from './Header'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<Header />)

describe('should render Header component', () => {
  let spyOnUseSelector

  let component

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

  it('should work SearchBarIconButton', () => {
    component.find('div[id=\'SearchBarIconButton\']').simulate('click')
    expect.stringMatching('Paper')
  })
})

describe('should render Header component', () => {
  let spyOnUseSelector

  let component

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(true)

    component = setUp()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should render CustomizedDialogs', () => {
    let wrapper = component.find('CustomizedDialogs')
    expect(wrapper.length).toBe(1)
  })
})
