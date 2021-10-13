import { shallow } from 'enzyme'
import React from 'react'
import FollowingAdditionsItem from './FollowingAdditionsItem'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<FollowingAdditionsItem {...props}/>)

describe('should render FollowingAdditionsItem component', () => {
  let component
  let mockFunc = jest.fn()
  beforeEach(() => {
    component = setUp({
      title: 'All',
      subtitle: '',
      onClick: mockFunc
    })
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
