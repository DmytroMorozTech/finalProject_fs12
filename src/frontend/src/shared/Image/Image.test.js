import React from 'react'
import Image from './Image'
import { shallow } from 'enzyme'

const setUp = (props) => shallow(
  <Image {...props}/>
)

function getDefaultImgUrl (type) {
  if (type === 'profileAvatar' || type === 'extraLargeAvatar' ||
    type === 'largeAvatar' || type === 'mediumAvatar' ||
    type === 'smallAvatar' || type === 'extraSmallAvatar') {
    return 'linkedin/general/ghrchekikx3dnas6ivxm'
  }
  if (type === 'profileBgImg') {
    return 'linkedin/general/u4aqln7amyyfdj0tehqy'
  }
  if (type === 'miniProfileBgImg') {
    return 'linkedin/general/fdtqc5hacop8w5zt663j'
  }
}

describe('should work Image component', () => {
  it('for profileBgImg', () => {
    // let component = setUp({imageUrl: null, type: 'profileBgImg'})
    // expect(getDefaultImgUrl(component.type)).toBe('linkedin/general/u4aqln7amyyfdj0tehqy')
    let component = setUp({imageUrl: null, type: 'profileBgImg'})
    expect(component.find('defaultImgUrl')).toBe('linkedin/general/u4aqln7amyyfdj0tehqy')
  })
  it('for miniProfileBgImg', () => {
    let component = setUp({imageUrl: null, type: 'miniProfileBgImg'})
    expect(getDefaultImgUrl(component.type)).toBe('linkedin/general/fdtqc5hacop8w5zt663j')
  })
  it('for profileAvatar', () => {
    let component = setUp({imageUrl: null, type: 'profileAvatar'})
    expect(getDefaultImgUrl(component.type)).toBe('linkedin/general/ghrchekikx3dnas6ivxm')
  })
  it('for extraLargeAvatar', () => {
    let component = setUp({imageUrl: null, type: 'extraLargeAvatar'})
    expect(getDefaultImgUrl(component.type)).toBe('linkedin/general/ghrchekikx3dnas6ivxm')
  })
  it('for largeAvatar', () => {
    let component = setUp({imageUrl: null, type: 'largeAvatar'})
    expect(getDefaultImgUrl(component.type)).toBe('linkedin/general/ghrchekikx3dnas6ivxm')
  })
  it('for mediumAvatar', () => {
    let component = setUp({imageUrl: null, type: 'mediumAvatar'})
    expect(getDefaultImgUrl(component.type)).toBe('linkedin/general/ghrchekikx3dnas6ivxm')
  })
  it('for smallAvatar', () => {
    let component = setUp({imageUrl: null, type: 'smallAvatar'})
    expect(getDefaultImgUrl(component.type)).toBe('linkedin/general/ghrchekikx3dnas6ivxm')
  })
  it('for extraSmallAvatar', () => {
    let component = setUp({imageUrl: null, type: 'extraSmallAvatar'})
    expect(getDefaultImgUrl(component.type)).toBe('linkedin/general/ghrchekikx3dnas6ivxm')
  })
  it('for postImg', () => {
    let component = setUp({imageUrl: null, type: 'postImg'})
    expect(component.props.type).toBe('postImg')
  })
})
