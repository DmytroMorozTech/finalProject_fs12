import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import Navbar from './Navbar'

const setUp = (props) => shallow(<Navbar {...props}/>)

describe('should render Navbar component', () => {
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
  it('should pass values to NavbarItem', () => {
    expect.stringMatching('Home')
    expect.stringMatching('Network')
    expect.stringMatching('Jobs')
    expect.stringMatching('Messages')
    expect.stringMatching('Notifications')
    expect.stringMatching('Me')
  })
})
