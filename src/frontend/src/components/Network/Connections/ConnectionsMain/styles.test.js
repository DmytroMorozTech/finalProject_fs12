import React from 'react'
import ConnectionsMain from './ConnectionsMain'
import { render } from 'enzyme'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../../../Theme/Theme'
import { connections } from './ConnectionsMain.test'
import * as redux from 'react-redux'

jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = (props) => render(
  <ThemeProvider theme={theme}>
    <ConnectionsMain {...props}/>
  </ThemeProvider>)

describe('should render ConnectionsMain styles', () => {
  let spyOnUseSelector
  let spyOnUseDispatch
  let mockDispatch

  let component
  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(false)
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    component = setUp({connections})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
