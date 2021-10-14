import { shallow } from 'enzyme'
import React from 'react'
import MyJobsLeft from './MyJobsLeft'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<MyJobsLeft/>)

describe('should render MyJobsLeft component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
