import { shallow } from 'enzyme'
import React from 'react'
import InvitationManagerRight from './InvitationManagerRight'

jest.mock('./styles', () => () => ({}))

const setUp = () => shallow(<InvitationManagerRight />)

describe('should render InvitationManagerRight component', () => {
  let component

  beforeEach(() => {
    component = setUp()
  })

  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
