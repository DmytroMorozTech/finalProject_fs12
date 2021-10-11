import React from 'react'
import LikeMiniIcon from './LikeMiniIcon'
import { render } from 'enzyme'

const setUp = () => render(<LikeMiniIcon />)

describe('should render LikeMiniIcon component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
