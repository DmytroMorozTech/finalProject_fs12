import React from 'react'
import Preloader from './Preloader'
import { shallow } from 'enzyme'

const setUp = (props) => shallow(<Preloader {...props}/>)

describe('Preloader component', () => {
  it('has prop true -> should render FullscreenTrue', () => {
    let fullscreen = true
    let component = setUp({fullscreen})
    const wrapper = component.find('FullscreenTrue')
    expect(wrapper.length).toBe(1)
  })
  it('has prop false -> should render FullscreenFalse', () => {
    let fullscreen = false
    let component = setUp({fullscreen})
    const wrapper = component.find('FullscreenFalse')
    expect(wrapper.length).toBe(1)
  })
  it('has not prop -> should render FullscreenFalse', () => {
    let component = setUp()
    const wrapper = component.find('FullscreenFalse')
    expect(wrapper.length).toBe(1)
  })
})
