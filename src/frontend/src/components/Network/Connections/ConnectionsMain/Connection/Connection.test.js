import React from 'react'
import Connection from './Connection'
import { render } from 'enzyme'
import theme from '../../../../../Theme/Theme'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import * as redux from 'react-redux'

const connection = {
  'id': 4,
  'createdDate': '2015-05-11T22:21:12.123123',
  'firstName': 'Everett',
  'lastName': 'Anderson',
  'fullName': 'Everett Anderson',
  'avatarPublicId': 'linkedin/avatars/i1bzhpqac3i1ld2urju8',
  'profileBgPublicId': '',
  'positionAndCompany': 'Project manager at HQSoftware',
  'email': 'test4@gmail.com',
  'isFollowedByActiveUser': true,
  'numberOfFollowers': 4
}

describe('should render Connection component', () => {
  const setUp = (props) => render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Connection {...props}/>
      </BrowserRouter>
    </ThemeProvider>)

  let spyOnUseSelector
  let spyOnUseDispatch
  let mockDispatch

  let component
  // let instance
  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(false)
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp({connection})
    // instance = component.instance()
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
  // it('handleRemoved', () => {
  //   instance.handleRemove(component.id)
  //     .expect(component.toBeNull())
  // })
})
