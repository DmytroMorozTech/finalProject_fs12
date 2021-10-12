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

// describe('should render PopupMenu component', () => {
//   let component
//   beforeEach(() => {
//     component = mount(<PopupMenu/>)
//     it('when user click span should work handleToggle', () => {
//       expect(component.find('MenuList')).toBe(0)
//
//       component.find('#spanForHandleToggle').simulate('click')
//
//       expect(component.find('MenuList')).toBe(1)
//     })
//     it('user click away should work handleClose', () => {
//       expect(component.find('MenuList')).toBe(1)
//
//       component.find('#spanForHandleToggle').simulate(CloseEvent)
//
//       expect(component.find('MenuList')).toBe(0)
//     })
//   })
// })
