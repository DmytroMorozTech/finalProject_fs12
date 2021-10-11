import React from 'react'
import PopupMenu from './PopupMenu'
import { render, mount } from 'enzyme'
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

// describe('should render PopupMenu component', () => {
//   let component
//   beforeEach(() => {
//     component = mount(<PopupMenu/>)
//     it('user click span', () => {
//       expect(component.find('Popper')).toBe(0)
//
//       component.find('#spanForHandleToggle').simulate('click')
//
//       expect(component.find('Popper')).toBe(1)
//     })
//   })
// })
