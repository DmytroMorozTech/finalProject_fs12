import SeeMore from './SeeMore'
import { shallow } from 'enzyme'
import React from 'react'

const setUp = (props) => shallow(<SeeMore {...props}/>)

describe('should render SeeMore component', () => {
  let numberOfLimitChar
  let children

  let component
  beforeEach(() => {
    numberOfLimitChar = 2
    children = 'text'
    component = setUp({ numberOfLimitChar, children })
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should work handleSeeMore', () => {
    component.find('span[id=\'seeMore\']').simulate('click')
    expect.stringMatching('text')
  })
})
