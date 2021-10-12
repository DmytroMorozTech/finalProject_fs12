import React from 'react'
import ConnectionAddition from './ConnectionAddition'
import { shallow } from 'enzyme'

const setUp = (props) => shallow(<ConnectionAddition {...props}/>)

describe('should render ConnectionAddition component', () => {
  let component
  let onClick = () => {}
  beforeEach(() => {
    component = setUp({onClick})
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
