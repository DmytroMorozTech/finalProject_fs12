import { shallow } from 'enzyme'
// import * as redux from 'react-redux'
import React from 'react'
import PeopleIFollowHeader from './PeopleIFollowHeader'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<PeopleIFollowHeader {...props}/>)

describe('should render PeopleIFollowHeader component', () => {
  // let spyOnUseSelector
  // let spyOnUseDispatch
  // let mockDispatch

  let numberOfUsersFollowedByMe = 1
  let numberOfUsersFollowingMe = 2

  let component
  beforeEach(() => {
    // spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    // spyOnUseSelector.mockReturnValue(false)
    // spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    // mockDispatch = jest.fn()
    // spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp({numberOfUsersFollowedByMe, numberOfUsersFollowingMe})
  })
  // afterEach(() => {
  //   jest.restoreAllMocks()
  // })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
