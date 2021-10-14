import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import ProfileMain from './ProfileMain'

jest.mock('./styles', () => () => ({}))
jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = (props) => shallow(<ProfileMain {...props}/>)

describe('should render ProfileMain component', () => {
  let spyOnUseDispatch
  let mockDispatch

  const profile = {
    'id': 1,
    'createdDate': '2015-01-01T18:22:32.123123',
    'firstName': 'Richard',
    'lastName': 'West',
    'headline': 'Java Developer',
    'country': 'USA',
    'city': 'New York',
    'fullName': 'Richard West',
    'avatarPublicId': 'linkedin/avatars/vbalexhudya0ano14pgs',
    'profileBgPublicId': 'linkedin/profile-bg/isgzneqfm5ro1bufycqc',
    'positionAndCompany': 'Sales manager at Microsoft',
    'phoneNumber': '+380502926823',
    'age': '20',
    'email': 'test@gmail.com',
    'groups': [],
    'workPlaces': [
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
    ],
    'educations': [
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
      }
    ],
    'certifications': [
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
      }
    ],
    'isFollowedByActiveUser': false,
    'numberOfFollowers': 3
  }

  let isEditable = true

  let component

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp({profile, isEditable})
  })
  it('should work dispatch toggle modal upload profile bg', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('div[id=\'toggleModalUploadProfileBg\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
  it('should work dispatch upload avatar', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('Image[id=\'toggleModalUploadAvatar\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
  it('should work dispatch edit intro', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('div[id=\'toggleModalEditIntro\']').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
