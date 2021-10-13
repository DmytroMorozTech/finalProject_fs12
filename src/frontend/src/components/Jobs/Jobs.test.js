import { shallow } from 'enzyme'
import React from 'react'
import Jobs from './Jobs'

const setUp = () => shallow(<Jobs />)

describe('should render Jobs component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
