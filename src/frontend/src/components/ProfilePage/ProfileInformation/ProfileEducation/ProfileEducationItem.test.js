import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import ProfileEducationItem from './ProfileEducationItem'

jest.mock('../styles', () => () => ({}))

let education = {
  'id': 1,
  'school': 'NY Programming with MARK courses',
  'degreeReceived': 'Graduate',
  'activities': 'Studying Data-structures and algorithms',
  'description': 'Highly intensive programming courses',
  'fieldOfStudy': 'Programming',
  'dateStart': '2013-01-01',
  'dateFinish': '2014-01-01'
}

let isEditable = false

let component

const setUp = (props) => shallow(<ProfileEducationItem {...props}/>)

describe('should render ProfileEducationItem component', () => {
  let spyOnUseDispatch
  let mockDispatch

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp({
      education,
      isEditable
    })
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should work dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('div[id=\'toggleModal\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
