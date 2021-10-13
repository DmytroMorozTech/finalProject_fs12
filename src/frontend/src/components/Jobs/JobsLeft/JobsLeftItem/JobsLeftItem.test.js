import { shallow } from 'enzyme'
import React from 'react'
import JobsLeftItem from './JobsLeftItem'

jest.mock('./styles', () => () => ({}))
jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = () => shallow(<JobsLeftItem />)

describe('should render JobsLeftItem component', () => {
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
