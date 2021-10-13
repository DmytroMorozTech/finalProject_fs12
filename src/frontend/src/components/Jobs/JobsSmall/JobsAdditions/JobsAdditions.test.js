import { shallow } from 'enzyme'
import React from 'react'
import JobsAdditions from './JobsAdditions'

jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = () => shallow(<JobsAdditions/>)

describe('should render JobsAdditions component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
