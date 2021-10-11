import React from 'react'
import ImgToJobsPage from './ImgToJobsPage'
import { render } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'

const setUp = () => render(
  <BrowserRouter>
    <ImgToJobsPage />
  </BrowserRouter>
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
