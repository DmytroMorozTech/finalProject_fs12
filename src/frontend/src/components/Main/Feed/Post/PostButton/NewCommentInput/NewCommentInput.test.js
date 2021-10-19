import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import NewCommentInput from './NewCommentInput'

const comments = {5: [
  {
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
  },
  {
    id: 18,
    text: 'Comment no.18 goes here.',
    user: {
      id: 5,
      fullName: 'Katherine McCarthy',
      avatarPublicId: 'linkedin/avatars/hj8sulgxxo5ywotggkcy',
      positionAndCompany: 'HR-consultant at Amazon.com'
    },
    createdDate: '2021-01-06T18:09:10.123112',
    lastModifiedDate: '2021-01-06T18:09:10.123112',
    isLikedByActiveUser: false,
    numberOfLikes: 0
  }
]}

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<NewCommentInput {...props}/>)

describe('should render NewCommentInput component', () => {
  let spyOnUseSelector
  let spyOnUseDispatch
  let mockDispatch

  let postId
  let postHasMoreComments
  let onCommentsLoadHandler
  let commentsAreLoading
  let singlePostRender

  let component

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(comments)
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    postId = 5
    postHasMoreComments = false
    onCommentsLoadHandler = jest.fn()
    commentsAreLoading = false
    singlePostRender = false

    component = setUp(
      {
        postId,
        postHasMoreComments,
        onCommentsLoadHandler,
        commentsAreLoading,
        singlePostRender
      }
    )
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should work new comment dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('SharedButton[id=\'newCommentButton\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
  it('should work handle ctrl + enter pressed', () => {
    let wrapper = component.find('WithStyles(ForwardRef(InputBase))')
    wrapper.simulate('keyDown', {key: 'Enter'}, {keyCode: 17})
    expect.stringContaining('\n')
  })
  it('should work handle enter pressed on empty input', () => {
    let wrapper = component.find('WithStyles(ForwardRef(InputBase))')
    wrapper.simulate('keyDown', {key: 'Enter'})
    expect.not.stringContaining('\n')
  })
  it('should work handle ctrl + enter pressed on not empty input', () => {
    let wrapper = component.find('WithStyles(ForwardRef(InputBase))')
    wrapper.simulate('keyDown', {key: 'j'})
    wrapper.simulate('keyDown', {key: 's'})
    expect.stringContaining('js')
    wrapper.simulate('keyDown', {key: 'Enter'}, {key: 'ctrlKey'})
    expect.stringContaining('')
  })
  it('should work map of commentsForPost', () => {
    expect(component.find('Comment').length).toBe(2)
  })
})
