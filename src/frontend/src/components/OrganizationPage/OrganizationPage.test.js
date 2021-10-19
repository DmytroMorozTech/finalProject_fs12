import { shallow } from 'enzyme'
import React from 'react'
import OrganizationPage from './OrganizationPage'

const setUp = () => shallow(<OrganizationPage />)

describe('should render OrganizationPage component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
