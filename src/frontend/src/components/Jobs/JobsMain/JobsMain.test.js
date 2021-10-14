import { shallow } from 'enzyme'
import React from 'react'
import JobsMain from './JobsMain'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<JobsMain />)

describe('should render JobsMain component', () => {
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
