import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import ProfileEducation from './ProfileEducation'

jest.mock('../styles', () => () => ({}))

const educations = [
  {
    'id': 1,
    'school': 'NY Programming with MARK courses',
    'degreeReceived': 'Graduate',
    'activities': 'Studying Data-structures and algorithms',
    'description': 'Highly intensive programming courses',
    'fieldOfStudy': 'Programming',
    'dateStart': '2013-01-01',
    'dateFinish': '2014-01-01'
  },
  {
    'id': 2,
    'school': 'NY High-school for Humanitarians',
    'degreeReceived': 'Phd',
    'activities': 'Studying hard, reading a lot',
    'description': 'High-level of education; nice capmus; ...',
    'fieldOfStudy': 'Chemistry',
    'dateStart': '2015-07-08',
    'dateFinish': '2017-07-08'
  },
  {
    'id': 3,
    'school': 'MIT',
    'degreeReceived': 'Bachelor',
    'activities': 'Working hard; Writing scientifica articles',
    'description': 'High-level of education; nice capmus; ...',
    'fieldOfStudy': 'Electronics',
    'dateStart': '2011-03-03',
    'dateFinish': '2015-04-04'
  },
  {
    'id': 4,
    'school': 'Michigan state University',
    'degreeReceived': 'Msc',
    'activities': 'Doing mathematical calculations all day long',
    'description': 'Best calculus ever',
    'fieldOfStudy': 'Math',
    'dateStart': '2017-03-03',
    'dateFinish': '2019-03-03'
  },
  {
    'id': 5,
    'school': 'Mount Royal University',
    'degreeReceived': 'Bachelor',
    'activities': 'Studying best practices of Financial Analysis',
    'description': 'Studying  risk management and behavioral finance principles to understand the real-world functioning of securities, insurance, and banking industries.',
    'fieldOfStudy': 'Economy and Finance',
    'dateStart': '2012-01-02',
    'dateFinish': '2016-03-05'
  },
  {
    'id': 6,
    'school': 'University of Calgary',
    'degreeReceived': 'Msc',
    'activities': 'Studying best practices of Financial Analysis',
    'description': 'Learning ideas, methods, and institutions that permit human society to manage risks and foster enterprise. Emphasis on financially-savvy leadership skills. ',
    'fieldOfStudy': 'Economy and Finance',
    'dateStart': '2017-03-03',
    'dateFinish': '2019-03-03'
  }
]

let isEditable

const setUp = (props) => shallow(<ProfileEducation {...props}/>)

describe('should render ProfileEducation component without props', () => {
  let spyOnUseDispatch
  let mockDispatch

  let emptyEducations

  let component

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    emptyEducations = []

    isEditable = false

    component = setUp({emptyEducations, isEditable})
  })
  it('should work dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('div[id=\'toggleModal\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})

describe('should render ProfileCertification component with props', () => {
  let spyOnUseDispatch
  let mockDispatch

  let component

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    isEditable = true

    component = setUp({educations, isEditable})
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
