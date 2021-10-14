import { shallow } from 'enzyme'
import React from 'react'
import MyJobsRight from './MyJobsRight'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<MyJobsRight/>)

describe('should render MyJobsRight component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
