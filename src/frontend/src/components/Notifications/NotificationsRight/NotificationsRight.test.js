import { shallow } from 'enzyme'
import React from 'react'
import NotificationsRight from './NotificationsRight'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<NotificationsRight {...props}/>)

describe('should render NotificationsRight component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
