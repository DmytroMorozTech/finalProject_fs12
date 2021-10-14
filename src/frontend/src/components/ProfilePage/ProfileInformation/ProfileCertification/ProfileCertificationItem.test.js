import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import ProfileCertificationItem from './ProfileCertificationItem'

jest.mock('../styles', () => () => ({}))

let isEditable

let component

const setUp = (props) => shallow(<ProfileCertificationItem {...props}/>)

describe('should render ProfileCertificationItem component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let certification = {
    'id': 1,
    'name': 'Spring data jpa',
    'issuingOrganization': 'DAN-IT',
    'hasExpiryDate': true,
    'issueDate': '2016-01-01',
    'expirationDate': '2026-01-01',
    'credentialId': 'PS35092',
    'credentialUrl': 'https://dan-it.com.ua'
  }

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    isEditable = false

    component = setUp({
      certification,
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
  it('has expiry date', () => {
    expect.stringContaining('Jan 2026')
  })
})

describe('should render ProfileCertificationItem component', () => {
  let spyOnUseDispatch
  let mockDispatch

  let certification = {
    'id': 2,
    'name': 'On-site practice',
    'issuingOrganization': 'Unilever',
    'hasExpiryDate': false,
    'issueDate': '2017-07-08',
    'expirationDate': null,
    'credentialId': 'RQ3627AS',
    'credentialUrl': 'https://unilever.ua'
  }

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    isEditable = true

    component = setUp({
      certification,
      isEditable
    })
  })
  it('has not expiry date', () => {
    expect.stringContaining('No Expiration Date')
  })
})
