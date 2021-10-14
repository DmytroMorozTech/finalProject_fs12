import { shallow } from 'enzyme'
import React from 'react'
import SavedVacancyAdditionsItem from './SavedVacancyAdditionsItem'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<SavedVacancyAdditionsItem/>)

describe('should render SavedVacancyAdditionsItem component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
