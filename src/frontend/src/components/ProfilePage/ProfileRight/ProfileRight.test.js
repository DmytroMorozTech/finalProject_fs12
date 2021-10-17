import { shallow } from 'enzyme'
import React from 'react'
import ProfileRight from './ProfileRight'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<ProfileRight />)

describe('should render ProfileRight component', () => {
  let component

  beforeEach(() => {
    component = setUp()
  })

  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
