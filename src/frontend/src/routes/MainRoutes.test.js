import { shallow } from 'enzyme'
import React from 'react'
import MainRoutes from './MainRoutes'

const setUp = () => shallow(<MainRoutes />)

describe('should render MainRoutes', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
