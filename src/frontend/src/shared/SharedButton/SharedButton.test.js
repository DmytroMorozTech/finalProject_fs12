import React from 'react'
import SharedButton from './SharedButton'
import { shallow } from 'enzyme'

const setUp = () => shallow(<SharedButton />)

describe('should render SharedButton component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
