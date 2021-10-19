import { shallow } from 'enzyme'
import * as redux from 'react-redux'
import React from 'react'
import NavbarItem from './NavbarItem'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<NavbarItem {...props}/>)

describe('should render NavbarItem component', () => {
  let spyOnUseSelector
  let spyOnUseDispatch
  let mockDispatch

  let Icon
  let title
  let arrow
  let toggleMenu
  let badge
  let to

  let component

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(false)
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    Icon = <HomeRoundedIcon fontSize='inherit' onClick={() => mockDispatch}/>
    title = 'Home'
    arrow = false
    toggleMenu = false
    badge = false
    to = '/home'

    component = setUp({Icon, title, arrow, toggleMenu, badge, to})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('should work SearchBarIconButton', () => {
    expect(mockDispatch).toHaveBeenCalledTimes(0)
    component.find('NavLink').simulate('click')
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
