import { shallow } from 'enzyme'
import React from 'react'
import FollowingAdditions from './FollowingAdditions'

const setUp = (props) => shallow(<FollowingAdditions {...props}/>)

describe('should render FollowingAdditions component', () => {
  let component
  let mockFunc = jest.fn()
  beforeEach(() => {
    component = setUp({
      handleAll: mockFunc,
      handleConnections: mockFunc,
      handleOutOfNetwork: mockFunc,
      handleCompanies: mockFunc
    })
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
