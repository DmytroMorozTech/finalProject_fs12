import { shallow } from 'enzyme'
import React from 'react'
import InvitationManagerHeader from './InvitationManagerHeader'

jest.mock('./styles', () => () => ({}))
jest.mock('react-router-dom', () => ({
  NavLink: 'a'
}))

const setUp = (props) => shallow(<InvitationManagerHeader {...props}/>)

describe('should render InvitationManagerHeader component', () => {
  let component

  let numberOfInvReceived = 1
  let numberOfInvSent = 2

  beforeEach(() => {
    component = setUp(
      numberOfInvReceived,
      numberOfInvSent
    )
  })

  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
