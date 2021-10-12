import React from 'react'
import ConnectionsRight from './ConnectionsRight'
import { render } from 'enzyme'
import theme from '../../../../Theme/Theme'
import { ThemeProvider } from '@material-ui/styles'

jest.mock('react-router-dom', () => ({
  Link: 'a'
}))

const setUp = () => render(
  <ThemeProvider theme={theme}>
    <ConnectionsRight />
  </ThemeProvider>)

describe('should render ConnectionsRight styles', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
