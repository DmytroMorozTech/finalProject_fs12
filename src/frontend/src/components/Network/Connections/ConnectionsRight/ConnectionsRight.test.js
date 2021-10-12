import React from 'react'
import ConnectionsRight from './ConnectionsRight'
import { render } from 'enzyme'

const setUp = () => render(<ConnectionsRight />)

describe('should render ConnectionsRight component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
