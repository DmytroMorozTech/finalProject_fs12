import { shallow } from 'enzyme'
import React from 'react'
import MyJobs from './MyJobs'

jest.mock('./styles', () => () => ({}))
jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = () => shallow(<MyJobs/>)

describe('should render MyJobs component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
