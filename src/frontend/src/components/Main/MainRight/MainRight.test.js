import { shallow } from 'enzyme'
import React from 'react'
import MainRight from './MainRight'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<MainRight/>)

describe('should render MainRight component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
