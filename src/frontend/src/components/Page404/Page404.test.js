import { shallow } from 'enzyme'
import React from 'react'
import Page404 from './Page404'

const setUp = () => shallow(<Page404 />)

describe('should render Page404 component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
