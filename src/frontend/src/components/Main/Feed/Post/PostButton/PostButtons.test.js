import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import PostButtons from './PostButtons'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<PostButtons {...props}/>)

describe('should render PostButtons component is not singlePostRender', () => {
  let spyOnUseDispatch
  let mockDispatch

  let postId
  let isLikedByActiveUser
  let handleComment
  let singlePostRender

  let component

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    postId = 23
    isLikedByActiveUser = false
    handleComment = jest.fn()
    singlePostRender = false

    component = setUp({
      postId,
      isLikedByActiveUser,
      handleComment,
      singlePostRender})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should work modalSendMessage dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('div[id="Send"]').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
  it('should work handleCopy', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('div[id="Like"]').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})

describe('should render PostButtons component is singlePostRender', () => {
  let spyOnUseDispatch
  let mockDispatch

  let postId
  let isLikedByActiveUser
  let handleComment
  let singlePostRender

  let component

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    postId = 23
    isLikedByActiveUser = false
    handleComment = jest.fn()
    singlePostRender = true

    component = setUp({
      postId,
      isLikedByActiveUser,
      handleComment,
      singlePostRender})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('should work handleCopy', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('div[id="Like"]').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
