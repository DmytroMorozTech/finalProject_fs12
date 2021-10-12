import React from 'react'
import FullscreenFalse from './FullscreenFalse'
import { shallow } from 'enzyme'

const setUp = (props) => shallow(<FullscreenFalse {...props}/>)

describe('should render FullscreenFalse component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
