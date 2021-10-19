import { shallow } from 'enzyme'
import React from 'react'
import MainLeft from './MainLeft'
import * as redux from 'react-redux'

jest.mock('./styles', () => () => ({}))

const setUp = (props) => shallow(<MainLeft {...props}/>)

describe('should render MainLeft component', () => {
  let spyOnUseSelector

  let numberOfConnections
  let component
  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(false)

    numberOfConnections = 2
    component = setUp({numberOfConnections})
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
