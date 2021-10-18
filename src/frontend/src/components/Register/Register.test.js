import { shallow } from 'enzyme'
import React from 'react'
import Register from './Register'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<Register {...props}/>)

describe('should render Register component with RegisterGooglePage', () => {
  let isByGoogle = true
  let component

  beforeEach(() => {
    component = setUp({ isByGoogle })
  })

  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should render RegisterGooglePage', () => {
    let wrapper = component.find('RegisterGooglePage')
    expect(wrapper.length).toBe(1)
  })
})

describe('should render Register component with RegisterPage', () => {
  let isByGoogle = false
  let component

  beforeEach(() => {
    component = setUp({ isByGoogle })
  })

  it('should render RegisterPage', () => {
    let wrapper = component.find('RegisterPage')
    expect(wrapper.length).toBe(1)
  })
})
