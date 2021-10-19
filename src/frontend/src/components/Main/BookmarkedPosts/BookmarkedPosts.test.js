import { shallow } from 'enzyme'
import React from 'react'
import BookmarkedPosts from './BookmarkedPosts'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<BookmarkedPosts />)

describe('should render BookmarkedPosts component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
