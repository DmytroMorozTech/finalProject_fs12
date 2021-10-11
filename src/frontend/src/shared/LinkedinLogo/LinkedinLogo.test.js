import React from 'react'
import LinkedinLogo from './LinkedinLogo'
import { render } from 'enzyme'
import theme from '../../Theme/Theme'
import { ThemeProvider } from '@material-ui/styles'

const setUp = () => render(
  <ThemeProvider theme={theme}>
    <LinkedinLogo />
  </ThemeProvider>)

describe('should render LinkedinLogo component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
