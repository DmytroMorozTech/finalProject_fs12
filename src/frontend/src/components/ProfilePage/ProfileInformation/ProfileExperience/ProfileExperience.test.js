import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import ProfileExperience from './ProfileExperience'

jest.mock('../styles', () => () => ({}))

const workPlaces = [
  {
    'id': 1,
    'position': 'Chief Operational Officer',
    'responsibilities': 'Quisque id rhoncus mauris. Phasellus quis diam aliquet, gravida massa in, suscipit felis. Aliquam ac turpis arcu. Nunc fermentum dui augue, et aliquam eros ullamcorper imperdiet.',
    'dateStart': '2000-12-31',
    'dateFinish': '2010-06-12',
    'isCurrentlyEmployed': false,
    'organization': {
      'id': 3,
      'name': 'PayPal Holdings Inc.',
      'location': '2211 N 1st St, San Jose, CA 95131, United States',
      'webSite': 'www.paypal.com'
    }
  },
  {
    'id': 2,
    'position': 'CEO',
    'responsibilities': 'Fusce lacinia, nisl et vestibulum ultricies, orci risus luctus urna, et consectetur sem nibh non mauris. Phasellus ac aliquam libero, eu luctus lorem. Nulla tempor risus eu tortor mattis, id eleifend tellus semper. ',
    'dateStart': '2010-06-20',
    'dateFinish': '2013-11-22',
    'isCurrentlyEmployed': false,
    'organization': {
      'id': 2,
      'name': 'Apple',
      'location': '1 Apple Park Way Cupertino, California, 95014-0642 United States',
      'webSite': 'apple.com'
    }
  },
  {
    'id': 3,
    'position': 'Sales manager',
    'responsibilities': 'Phasellus vitae interdum mauris, eget luctus neque. Aenean at venenatis mauris, venenatis convallis velit. Suspendisse hendrerit lectus dolor, sit amet tristique odio lobortis sit amet. Donec ante purus, ',
    'dateStart': '2014-01-20',
    'dateFinish': null,
    'isCurrentlyEmployed': true,
    'organization': {
      'id': 1,
      'name': 'Microsoft',
      'location': 'Redmond, WA, US (HQ) Microsoft Corporation One Microsoft Way',
      'webSite': 'microsoft.com'
    }
  }
]

let isEditable

const setUp = (props) => shallow(<ProfileExperience {...props}/>)

describe('should render ProfileExperience component without props', () => {
  let spyOnUseDispatch
  let mockDispatch

  let emptyWorkPlace

  let component

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    emptyWorkPlace = []

    isEditable = false

    component = setUp({emptyWorkPlace, isEditable})
  })
  it('should work dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('div[id=\'toggleModal\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})

describe('should render ProfileExperience component with props', () => {
  let spyOnUseDispatch
  let mockDispatch

  let component

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    isEditable = true

    component = setUp({workPlaces, isEditable})
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  it('should show ProfileExperienceItem', () => {
    const wrapper = component.find('ProfileExperienceItem')
    expect(wrapper.length).toBe(3)
  })
  it('should work dispatch', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('div[id=\'toggleModal\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
