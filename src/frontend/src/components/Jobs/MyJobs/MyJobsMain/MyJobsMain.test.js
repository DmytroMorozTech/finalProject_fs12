import { shallow } from 'enzyme'
import React from 'react'
import MyJobsMain from './MyJobsMain'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<MyJobsMain/>)

describe('should render MyJobsMain component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
