import { shallow } from 'enzyme'
import NetworkLeft from './NetworkLeft'
import React from 'react'

export const numberOfConnections = 1
export const numberOfUsersFollowingMe = 2
export const numberGroups = 3

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<NetworkLeft {...props}/>)

describe('should render NetworkLeft component', () => {
  let component

  beforeEach(() => {
    component = setUp({numberOfConnections, numberOfUsersFollowingMe, numberGroups})
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
