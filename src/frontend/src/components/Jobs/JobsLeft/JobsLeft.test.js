import { shallow } from 'enzyme'
import React from 'react'
import JobsLeft from './JobsLeft'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<JobsLeft />)

describe('should render JobsLeft component', () => {
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
