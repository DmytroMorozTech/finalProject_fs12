import { shallow } from 'enzyme'
import React from 'react'
import JobsRight from './JobsRight'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<JobsRight/>)

describe('should render JobsRight component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
