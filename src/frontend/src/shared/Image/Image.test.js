import React from 'react'
import Image, { defaultAvatar, defaultMiniProfileBgImage, defaultProfileBgImg } from './Image'
import { shallow } from 'enzyme'

const setUp = (props) => shallow(
  <Image {...props}/>
)

describe('should work Image component', () => {
  it('for profileBgImg', () => {
    let component = setUp({imageUrl: null, type: 'profileBgImg'})
    expect(component.props().publicId).toBe(defaultProfileBgImg)
  })
  it('for miniProfileBgImg', () => {
    let component = setUp({imageUrl: null, type: 'miniProfileBgImg'})
    expect(component.props().publicId).toBe(defaultMiniProfileBgImage)
  })
  it('for profileAvatar', () => {
    let component = setUp({imageUrl: null, type: 'profileAvatar'})
    expect(component.props().publicId).toBe(defaultAvatar)
  })
  it('for extraLargeAvatar', () => {
    let component = setUp({imageUrl: null, type: 'extraLargeAvatar'})
    expect(component.props().publicId).toBe(defaultAvatar)
  })
  it('for largeAvatar', () => {
    let component = setUp({imageUrl: null, type: 'largeAvatar'})
    expect(component.props().publicId).toBe(defaultAvatar)
  })
  it('for mediumAvatar', () => {
    let component = setUp({imageUrl: null, type: 'mediumAvatar'})
    expect(component.props().publicId).toBe(defaultAvatar)
  })
  it('for smallAvatar', () => {
    let component = setUp({imageUrl: null, type: 'smallAvatar'})
    expect(component.props().publicId).toBe(defaultAvatar)
  })
  it('for extraSmallAvatar', () => {
    let component = setUp({imageUrl: null, type: 'extraSmallAvatar'})
    expect(component.props().publicId).toBe(defaultAvatar)
  })
  it('for postImg', () => {
    let component = setUp({imageUrl: null, type: 'postImg'})
    expect(component.toBeNull)
  })
  it('for default', () => {
    let component = setUp({imageUrl: null, type: 'something'})
    expect(component.toBeNull)
  })
})
