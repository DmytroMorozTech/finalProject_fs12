import { shallow } from 'enzyme'
import React from 'react'
import { useStyles, VideoPlayerClass } from './VideoPlayerClass'

const setUp = (props) => shallow(<VideoPlayerClass {...props}/>)

describe('should render VideoPlayerClass component', () => {
  let options
  let classes

  let component
  beforeEach(() => {
    options = {
      cloudName: 'dan-insta-step',
      uniqueIdentifier: 'linkedin_posts-video_xtkqkvhnfqurfibwksst',
      publicId: 'linkedin/posts-video/xtkqkvhnfqurfibwksst'
    }
    classes = useStyles

    component = setUp({options, classes})
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
