import { shallow } from 'enzyme'
import React from 'react'
import OrganizationRight from './OrganizationRight'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<OrganizationRight {...props}/>)

describe('should render OrganizationRight component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
