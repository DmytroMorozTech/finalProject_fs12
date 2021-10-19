import { shallow } from 'enzyme'
import React from 'react'
import Notifications from './Notifications'

const setUp = () => shallow(<Notifications />)

describe('should render Notifications component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
