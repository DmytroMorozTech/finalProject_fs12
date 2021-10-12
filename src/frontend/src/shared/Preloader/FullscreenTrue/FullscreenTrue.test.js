import React from 'react'
import FullscreenTrue from './FullscreenTrue'
import { shallow } from 'enzyme'

const setUp = (props) => shallow(<FullscreenTrue {...props}/>)

describe('should render FullscreenTrue component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
