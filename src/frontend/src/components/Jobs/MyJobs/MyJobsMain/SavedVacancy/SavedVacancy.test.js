import { shallow } from 'enzyme'
import React from 'react'
import SavedVacancy from './SavedVacancy'

jest.mock('./styles', () => () => ({}))
jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = () => shallow(<SavedVacancy/>)

describe('should render SavedVacancy component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
