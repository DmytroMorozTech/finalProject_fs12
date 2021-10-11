import React from 'react'
import TreeDots from './TreeDots'
import { shallow } from 'enzyme'

const setUp = () => shallow(<TreeDots />)

describe('should render TreeDots component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
