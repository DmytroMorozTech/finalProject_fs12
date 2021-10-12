import React from 'react'
import ConnectionsRight from './ConnectionsRight'
import { shallow } from 'enzyme'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<ConnectionsRight />)

describe('should render ConnectionsRight component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
