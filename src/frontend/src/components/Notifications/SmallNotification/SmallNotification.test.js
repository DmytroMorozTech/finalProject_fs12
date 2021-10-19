import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import SmallNotification from './SmallNotification'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<SmallNotification />)

describe('should render SmallNotification component', () => {
  let spyOnUseSelector
  let spyOnUseDispatch
  let mockDispatch

  let notification

  let component

  beforeEach(() => {
    notification = [{'id': 127, 'createdDate': '2021-10-19T20:48:14.466256', 'type': 'NEW_POST_WAS_CREATED', 'data': {'postId': 43}, 'userWhoTriggered': {'imgPublicId': 'linkedin/avatars/vrhpzgx8di9aoz5hykzh', 'fullName': 'Jamie Anderson', 'id': '11', 'text': 'sdfsdfsdf...'}, 'isViewed': false}, {'id': 117, 'createdDate': '2021-10-19T20:48:11.266651', 'type': 'NEW_POST_WAS_CREATED', 'data': {'postId': 42}, 'userWhoTriggered': {'imgPublicId': 'linkedin/avatars/vrhpzgx8di9aoz5hykzh', 'fullName': 'Jamie Anderson', 'id': '11', 'text': 'sdlfksdlkfj...'}, 'isViewed': false}, {'id': 103, 'createdDate': '2021-10-19T20:34:14.712304', 'type': 'NEW_POST_WAS_CREATED', 'data': {'postId': 41}, 'userWhoTriggered': {'imgPublicId': 'linkedin/avatars/vrhpzgx8di9aoz5hykzh', 'fullName': 'Jamie Anderson', 'id': '11', 'text': 'sdfsdfsdf...'}, 'isViewed': false}, {'id': 93, 'createdDate': '2021-10-19T20:34:12.472196', 'type': 'NEW_POST_WAS_CREATED', 'data': {'postId': 40}, 'userWhoTriggered': {'imgPublicId': 'linkedin/avatars/vrhpzgx8di9aoz5hykzh', 'fullName': 'Jamie Anderson', 'id': '11', 'text': 'sdfsdfsdf...'}, 'isViewed': false}, {'id': 83, 'createdDate': '2021-10-19T20:33:59.256914', 'type': 'NEW_POST_WAS_CREATED', 'data': {'postId': 39}, 'userWhoTriggered': {'imgPublicId': 'linkedin/avatars/vrhpzgx8di9aoz5hykzh', 'fullName': 'Jamie Anderson', 'id': '11', 'text': 'sdfslkdjfksjdfksjdfh\nksadjfksdjfh\n\nskdjfhskdjfh\n\n\nosdfjlsdkfj...'}, 'isViewed': false}, {'id': 58, 'createdDate': '2021-10-19T20:03:07.023922', 'type': 'NEW_POST_WAS_CREATED', 'data': {'postId': 32}, 'userWhoTriggered': {'imgPublicId': 'linkedin/avatars/vrhpzgx8di9aoz5hykzh', 'fullName': 'Jamie Anderson', 'id': '11', 'text': 'new post...'}, 'isViewed': false}, {'id': 48, 'createdDate': '2021-10-19T20:00:02.337555', 'type': 'NEW_POST_WAS_CREATED', 'data': {'postId': 31}, 'userWhoTriggered': {'imgPublicId': 'linkedin/avatars/vrhpzgx8di9aoz5hykzh', 'fullName': 'Jamie Anderson', 'id': '11', 'text': 'sdf...'}, 'isViewed': false}, {'id': 38, 'createdDate': '2021-10-19T19:59:41.036487', 'type': 'NEW_POST_WAS_CREATED', 'data': {'postId': 30}, 'userWhoTriggered': {'imgPublicId': 'linkedin/avatars/vrhpzgx8di9aoz5hykzh', 'fullName': 'Jamie Anderson', 'id': '11', 'text': 'new post...'}, 'isViewed': false}]

    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(notification)
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp()
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should work markAllNotificationsAsViewed dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('SharedButton[id=\'markAllNotificationsAsViewed\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
