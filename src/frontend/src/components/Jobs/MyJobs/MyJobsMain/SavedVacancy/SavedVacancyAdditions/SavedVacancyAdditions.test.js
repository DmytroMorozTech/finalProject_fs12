import { shallow } from 'enzyme'
import React from 'react'
import SavedVacancyAdditions from './SavedVacancyAdditions'

const setUp = () => shallow(<SavedVacancyAdditions/>)

describe('should render SavedVacancyAdditions component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
