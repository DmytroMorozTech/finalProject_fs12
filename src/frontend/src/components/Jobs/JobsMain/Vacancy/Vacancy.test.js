import { shallow } from 'enzyme'
import React from 'react'
import Vacancy from './Vacancy'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<Vacancy />)

describe('should render Vacancy component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
