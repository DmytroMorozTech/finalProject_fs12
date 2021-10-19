import { shallow } from 'enzyme'
import React from 'react'
import NoNotificationsAvailable from './NoNotificationsAvailable'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<NoNotificationsAvailable {...props}/>)

describe('should render NoNotificationsAvailable component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
