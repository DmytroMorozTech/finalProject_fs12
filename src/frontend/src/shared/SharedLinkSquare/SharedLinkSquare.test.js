import React from 'react'
import SharedLinkSquare from './SharedLinkSquare'
import { shallow } from 'enzyme'

const setUp = () => shallow(<SharedLinkSquare />)

describe('should render SharedLinkSquare component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
