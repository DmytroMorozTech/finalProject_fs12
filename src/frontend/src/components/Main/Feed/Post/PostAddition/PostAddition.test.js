import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import PostAddition from './PostAddition'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<PostAddition {...props} />)

describe('should render PostAddition component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let feedType
  let postId
  let isBookmarkedByActiveUser

  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    postId = 2
    feedType = 'posts'
    isBookmarkedByActiveUser = false

    component = setUp({postId, isBookmarkedByActiveUser, feedType})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('to render BookmarkBorderIcon', () => {
    expect.stringMatching('BookmarkBorderIcon')
  })
})

describe('should render PostAddition component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let feedType
  let postId
  let isBookmarkedByActiveUser

  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    postId = 2
    feedType = 'posts'
    isBookmarkedByActiveUser = true

    component = setUp({postId, isBookmarkedByActiveUser, feedType})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to render BookmarkIcon', () => {
    expect.stringMatching('BookmarkIcon')
  })
  it('should work toggleBookmark dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('div[id=\'item\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
