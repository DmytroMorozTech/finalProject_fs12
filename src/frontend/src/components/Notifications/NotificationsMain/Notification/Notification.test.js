import { shallow } from 'enzyme'
import React from 'react'
import Notification from './Notification'
import * as redux from 'react-redux'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<Notification {...props}/>)

describe('should render Notification component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let notification

  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    notification = {
      'id': 20,
      'createdDate': '2021-10-13T16:26:30.95932',
      'type': 'NEW_POST_WAS_CREATED',
      'data': {
        'postId': 26
      },
      'userWhoTriggered': {
        'imgPublicId': 'linkedin/avatars/hj8sulgxxo5ywotggkcy',
        'fullName': 'Katherine McCarthy',
        'id': '5',
        'text': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aene...'
      },
      'isViewed': false
    }

    component = setUp({ notification })
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

describe('should render Notification component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let notification

  // eslint-disable-next-line no-unused-vars
  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    notification = {
      'id': 13,
      'createdDate': '2021-10-05T23:10:32.123123',
      'type': 'POST_WAS_LIKED',
      'data': {
        'numberOfLikes': 19,
        'postId': 24
      },
      'userWhoTriggered': null,
      'isViewed': false
    }

    component = setUp({ notification })
  })
  it('should work case POST_WAS_LIKED', () => {
    expect.stringMatching('was liked')
  })
})

describe('should render Notification component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let notification

  // eslint-disable-next-line no-unused-vars
  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    notification = {
      'id': 1,
      'createdDate': '2021-10-03T10:02:21.123123',
      'type': 'NEW_COMMENTS_POST',
      'data': {
        'postId': 1,
        'numberOfComments': 3
      },
      'userWhoTriggered': null,
      'isViewed': false
    }

    component = setUp({ notification })
  })
  it('should work case NEW_COMMENTS_POST', () => {
    expect.stringMatching('was commented')
  })
})

describe('should render Notification component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let notification

  // eslint-disable-next-line no-unused-vars
  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    notification = {
      'id': 1,
      'createdDate': '2021-10-03T10:02:21.123123',
      'type': 'default',
      'data': {
        'postId': 1,
        'numberOfComments': 3
      },
      'userWhoTriggered': null,
      'isViewed': false
    }

    component = setUp({ notification })
  })
  it('should work case default', () => {
    expect.stringMatching('You\'ve just received a new notification')
  })
})
