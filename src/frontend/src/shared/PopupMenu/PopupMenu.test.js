import React from 'react'
import PopupMenu from './PopupMenu'
import { render } from 'enzyme'
import theme from '../../Theme/Theme'
import { ThemeProvider } from '@material-ui/styles'

describe('should render PopupMenu component', () => {
  let component
  beforeEach(() => {
    component = render(
      <ThemeProvider theme={theme}>
        <PopupMenu />
      </ThemeProvider>)
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
