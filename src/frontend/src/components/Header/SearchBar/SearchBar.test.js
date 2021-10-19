import { shallow } from 'enzyme'
import React from 'react'
import SearchBar from './SearchBar'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<SearchBar {...props}/>)

describe('should render SearchBar component', () => {
  let handleCloseSearchBar
  let isHandleClose

  let component

  beforeEach(() => {
    handleCloseSearchBar = jest.fn()
    isHandleClose = false

    component = setUp({handleCloseSearchBar, isHandleClose})
  })

  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

describe('should render SearchBar component', () => {
  let handleCloseSearchBar
  let isHandleClose

  let component

  beforeEach(() => {
    handleCloseSearchBar = jest.fn()
    isHandleClose = true

    component = setUp({handleCloseSearchBar, isHandleClose})
  })

  it('should render searchDropDownWrapper', () => {
    let inputWrapper = component.find('input')
    inputWrapper.simulate('keyDown', {key: 'r'}, {key: 'i'})
    expect.stringMatching('searchDropDownWrapper')
  })

  it('should not render searchDropDownWrapper', () => {
    let wrapper = component.find('input')
    wrapper.simulate('blur')
    expect.not.stringMatching('searchDropDownWrapper')
  })
})
