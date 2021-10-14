import { shallow } from 'enzyme'
import React from 'react'
import JobsSmall from './JobsSmall'

jest.mock('./styles', () => () => ({}))
jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = () => shallow(<JobsSmall/>)

describe('should render JobsSmall component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
