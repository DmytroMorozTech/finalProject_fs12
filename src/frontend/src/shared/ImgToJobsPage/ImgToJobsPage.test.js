import React from 'react'
import ImgToJobsPage from './ImgToJobsPage'
import { shallow } from 'enzyme'

const setUp = () => shallow(
  <ImgToJobsPage />
)

describe('should render ImgToJobsPage component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
