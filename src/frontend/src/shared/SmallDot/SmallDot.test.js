import React from 'react'
import SmallDot from './SmallDot'
import { render } from 'enzyme'
import theme from '../../Theme/Theme'
import { ThemeProvider } from '@material-ui/styles'

const setUp = () => render(
  <ThemeProvider theme={theme}>
    <SmallDot />
  </ThemeProvider>)

describe('should render SmallDot component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
