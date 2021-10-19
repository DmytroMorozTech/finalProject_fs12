import { shallow } from 'enzyme'
import React from 'react'
import OrganizationAddition from './OrganizationAddition'
import TelegramIcon from '@material-ui/icons/Telegram'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<OrganizationAddition {...props}/>)

describe('should render OrganizationAddition component', () => {
  let icon
  let title
  let onClick

  let component
  beforeEach(() => {
    icon = <TelegramIcon fontSize="inherit"/>
    title = 'Share in a message'
    onClick = jest.fn()

    component = setUp({ icon, title, onClick })
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
