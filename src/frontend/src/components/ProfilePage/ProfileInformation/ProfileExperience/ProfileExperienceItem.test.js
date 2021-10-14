import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import ProfileExperienceItem from './ProfileExperienceItem'

jest.mock('../styles', () => () => ({}))

let isEditable

let component

const setUp = (props) => shallow(<ProfileExperienceItem {...props}/>)

describe('should render ProfileExperienceItem component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let workPlace = {
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
  }

  isEditable = true

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp({
      workPlace,
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

describe('should render ProfileCertificationItem component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let workPlace = {
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

  isEditable = false

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    isEditable = true

    component = setUp({
      workPlace,
      isEditable
    })
  })
  it('has not dateFinish', () => {
    expect.stringContaining('Present time')
  })
})
