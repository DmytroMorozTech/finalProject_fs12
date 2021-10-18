import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import { Feed } from './Feed'

const setUp = (props) => shallow(<Feed {...props} />)

describe('should render Feed component', () => {
  let spyOnUseSelector
  let spyOnUseDispatch
  let mockDispatch

  let type
  let activeUserId
  let postsState
  let bookmarkedPostsState
  let loading
  let notificationsState

  let component

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(false)
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    type = 'bookmarkedPosts'
    activeUserId = 1
    postsState =
    postsState = {
      postsList: [
        {
          'id': 26,
          'text': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. ',
          'imgPublicId': 'linkedin/posts-img/abqr3eucghxxz31uwhwq',
          'videoPublicId': '',
          'numberOfLikes': 0,
          'numberOfComments': 0,
          'isLikedByActiveUser': false,
          'isBookmarkedByActiveUser': false,
          'createdDate': '2021-10-13T16:26:30.35932',
          'user': {
            'id': 5,
            'createdDate': '2015-08-12T07:32:31.123123',
            'fullName': 'Katherine McCarthy',
            'avatarPublicId': 'linkedin/avatars/hj8sulgxxo5ywotggkcy',
            'positionAndCompany': 'HR-consultant at Amazon.com'
          }
        },
        {
          'id': 25,
          'text': 'Indeed, it was a long journey.\nI would never have thought I get this far. I doubted it even after my HR, Sam Sherwood, told me that I got the offer. It was surreal. I wish I could explain better how I feel, but all I can say is, “thank you, God!”\nI am delighted to tell you that I will be joinning as software engineer at Google Cloud. I cannot thank you enough to my HR, Sam Sherwood for everything he has done for me from the beginning to the end of hiring process. I could not have done it without you! Thank you!\nI also thank you to many other people who have supported me along the way! Jacob Marquez, Jack Zeya Li, Wendy Hsu, Henry Ryu, Wei-Chih Chen and more…\nI sincerely enjoyed the ride with #AlgoExpert platform and Clement Mihailescu. I learned so much from it and it was the fundamental support for technical interviews. Thank you as well!\nLet’s begin the new journey!',
          'imgPublicId': 'linkedin/posts-img/dmmquywq4wovtluxyezr',
          'videoPublicId': '',
          'numberOfLikes': 0,
          'numberOfComments': 0,
          'isLikedByActiveUser': false,
          'isBookmarkedByActiveUser': false,
          'createdDate': '2021-10-13T15:50:15.432752',
          'user': {
            'id': 5,
            'createdDate': '2015-08-12T07:32:31.123123',
            'fullName': 'Katherine McCarthy',
            'avatarPublicId': 'linkedin/avatars/hj8sulgxxo5ywotggkcy',
            'positionAndCompany': 'HR-consultant at Amazon.com'
          }
        },
        {
          'id': 23,
          'text': 'Do you dream of becoming a great specialist in IT sphere?All training programs in DAN.IT are developed according to the standards of the IT division of the Israeli army (MAMRAM) using the TELEM methodology',
          'imgPublicId': '',
          'videoPublicId': 'linkedin/posts-video/xtkqkvhnfqurfibwksst',
          'numberOfLikes': 0,
          'numberOfComments': 0,
          'isLikedByActiveUser': false,
          'isBookmarkedByActiveUser': false,
          'createdDate': '2021-08-12T18:22:32.123123',
          'user': {
            'id': 2,
            'createdDate': '2015-03-03T22:22:32.123123',
            'fullName': 'Frank Jackson',
            'avatarPublicId': 'linkedin/avatars/kgpkn4a4fudfjpebyegx',
            'positionAndCompany': 'Head of CIS region at Apple'
          }
        },
        {
          'id': 22,
          'text': 'Storrors first was crossing from Europe to Asia by parkour. Bring your next first to life with Canon.',
          'imgPublicId': '',
          'videoPublicId': '',
          'numberOfLikes': 0,
          'numberOfComments': 0,
          'isLikedByActiveUser': false,
          'isBookmarkedByActiveUser': false,
          'createdDate': '2021-05-22T13:35:10.111222',
          'user': {
            'id': 5,
            'createdDate': '2015-08-12T07:32:31.123123',
            'fullName': 'Katherine McCarthy',
            'avatarPublicId': 'linkedin/avatars/hj8sulgxxo5ywotggkcy',
            'positionAndCompany': 'HR-consultant at Amazon.com'
          }
        }
      ],
      pagination: {
        pageNumber: 1,
        pageSize: 2,
        hasMore: false
      }
    }
    bookmarkedPostsState = []
    loading = false
    notificationsState = [
      {
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
      },
      {
        'id': 13,
        'createdDate': '2021-10-05T23:10:32.123123',
        'type': 'POST_WAS_LIKED',
        'data': {
          'numberOfLikes': 19,
          'postId': 24
        },
        'userWhoTriggered': null,
        'isViewed': false
      },
      {
        'id': 12,
        'createdDate': '2021-10-05T23:10:32.123123',
        'type': 'POST_WAS_LIKED',
        'data': {
          'numberOfLikes': 27,
          'postId': 23
        },
        'userWhoTriggered': null,
        'isViewed': false
      },
      {
        'id': 11,
        'createdDate': '2021-10-05T20:10:32.123123',
        'type': 'POST_WAS_LIKED',
        'data': {
          'numberOfLikes': 6,
          'postId': 21
        },
        'userWhoTriggered': null,
        'isViewed': false
      }
    ]

    component = setUp({ type, activeUserId, postsState, bookmarkedPostsState, loading, notificationsState })
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  // it('should render bookmarked posts components', () => {
  //   expect.stringMatching('bookmarkedPosts')
  // })
})
