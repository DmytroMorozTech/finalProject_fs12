import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import React from 'react'
import Post from './Post'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<Post {...props} />)

describe('should render Post component', () => {
  let spyOnUseDispatch
  let mockDispatch
  let feedType
  let post

  let component
  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    post = {
      'id': 26,
      'text': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. ',
      'imgPublicId': 'linkedin/posts-img/abqr3eucghxxz31uwhwq',
      'videoPublicId': 'linkedin/posts-video/xtkqkvhnfqurfibwksst',
      'numberOfLikes': 2,
      'numberOfComments': 1,
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
    }
    feedType = 'posts'

    component = setUp({post, feedType})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should work post like dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('div[id=\'like\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
  it('should showCommentsSectionsHandler', () => {
    component.find('WithStyles(ForwardRef(Typography))[id=\'numberOfComments\']').simulate('click')
    expect.stringMatching('NewCommentInput')
  })
})
