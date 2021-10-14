import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import ProfileCertification from './ProfileCertification'

jest.mock('../styles', () => () => ({}))

const certifications = [
  {
    'id': 1,
    'name': 'Spring data jpa',
    'issuingOrganization': 'DAN-IT',
    'hasExpiryDate': true,
    'issueDate': '2016-01-01',
    'expirationDate': '2026-01-01',
    'credentialId': 'PS35092',
    'credentialUrl': 'https://dan-it.com.ua'
  },
  {
    'id': 2,
    'name': 'On-site practice',
    'issuingOrganization': 'Unilever',
    'hasExpiryDate': false,
    'issueDate': '2017-07-08',
    'expirationDate': null,
    'credentialId': 'RQ3627AS',
    'credentialUrl': 'https://unilever.ua'
  },
  {
    'id': 3,
    'name': 'Spring data jpa',
    'issuingOrganization': 'DAN-IT',
    'hasExpiryDate': true,
    'issueDate': '2016-07-08',
    'expirationDate': '2025-07-08',
    'credentialId': 'MK98123HAP',
    'credentialUrl': 'https://dan-it.com.ua'
  },
  {
    'id': 4,
    'name': 'Mongo DB course',
    'issuingOrganization': 'DAN-IT',
    'hasExpiryDate': true,
    'issueDate': '2016-03-06',
    'expirationDate': '2023-03-02',
    'credentialId': 'MK98123HAP',
    'credentialUrl': 'https://dan-it.com.ua'
  },
  {
    'id': 5,
    'name': 'Financial accounting for entrepreneurs',
    'issuingOrganization': 'UDEMY',
    'hasExpiryDate': true,
    'issueDate': '2016-07-08',
    'expirationDate': '2025-07-08',
    'credentialId': 'FG8892348',
    'credentialUrl': 'https://www.udemy.com/'
  },
  {
    'id': 6,
    'name': 'Soft skills upgrade',
    'issuingOrganization': 'UDEMY',
    'hasExpiryDate': true,
    'issueDate': '2016-03-06',
    'expirationDate': '2023-03-02',
    'credentialId': 'JK9928402',
    'credentialUrl': 'https://www.udemy.com/'
  },
  {
    'id': 7,
    'name': 'Interpersonal communications',
    'issuingOrganization': 'UDEMY',
    'hasExpiryDate': true,
    'issueDate': '2016-07-08',
    'expirationDate': '2025-07-08',
    'credentialId': 'OP2983849',
    'credentialUrl': 'https://www.udemy.com/'
  },
  {
    'id': 8,
    'name': 'Software development',
    'issuingOrganization': 'UDEMY',
    'hasExpiryDate': true,
    'issueDate': '2016-03-06',
    'expirationDate': '2023-03-02',
    'credentialId': 'MW99128430',
    'credentialUrl': 'https://www.udemy.com/'
  }
]

let isEditable

const setUp = (props) => shallow(<ProfileCertification {...props}/>)

describe('should render ProfileCertification component without props', () => {
  let spyOnUseDispatch
  let mockDispatch

  let emptyCertifications

  let component

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    emptyCertifications = []

    isEditable = false

    component = setUp({emptyCertifications, isEditable})
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

    component = setUp({certifications, isEditable})
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
