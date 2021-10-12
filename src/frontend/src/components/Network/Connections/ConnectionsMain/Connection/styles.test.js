import React from 'react'
import Connection from './Connection'
import { render } from 'enzyme'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../../../../Theme/Theme'
import { connection } from './Connection.test'
import * as redux from 'react-redux'

jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = (props) => render(
  <ThemeProvider theme={theme}>
    <Connection {...props}/>
  </ThemeProvider>)

describe('should render Connection styles', () => {
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

    component = setUp({connection})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
