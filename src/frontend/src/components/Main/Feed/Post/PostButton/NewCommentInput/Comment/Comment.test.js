import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import Comment from './Comment'

jest.mock('./styles', () => () => ({}))
jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = (props) => shallow(<Comment {...props}/>)

describe('should render Comment component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let comment = {
    id: 17,
    text: 'Comment no.17 goes here.',
    user: {
      id: 5,
      fullName: 'Katherine McCarthy',
      avatarPublicId: 'linkedin/avatars/hj8sulgxxo5ywotggkcy',
      positionAndCompany: 'HR-consultant at Amazon.com'
    },
    createdDate: '2021-01-05T17:09:10.123111',
    lastModifiedDate: '2021-01-05T17:09:10.123111',
    isLikedByActiveUser: false,
    numberOfLikes: 0
  }
  let postId = 5

  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp({comment, postId})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should work comment like dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('span[id=\'commentLikeButton\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
  it('should toggle comment likes modal dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('span[id=\'toggleModal\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
