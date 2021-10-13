import { shallow } from 'enzyme'
import React from 'react'
import NetworkLeftItem from './NetworkLeftItem'

jest.mock('./styles', () => () => ({}))
jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = () => shallow(<NetworkLeftItem/>)

describe('should render NetworkLeftItem component', () => {
  let component

  beforeEach(() => {
    component = setUp()
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
