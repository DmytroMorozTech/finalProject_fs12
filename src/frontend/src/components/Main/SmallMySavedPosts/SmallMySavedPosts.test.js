import { shallow } from 'enzyme'
import React from 'react'
import SmallMySavedPosts from './SmallMySavedPosts'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<SmallMySavedPosts />)

describe('should render SmallMySavedPosts component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
