import * as redux from 'react-redux'
import { shallow } from 'enzyme'
import React from 'react'
import SinglePost from './SinglePost'

const setUp = (props) => shallow(<SinglePost {...props}/>)

describe('should render SinglePost component', () => {
  let spyOnUseSelector
  let spyOnUseDispatch
  let mockDispatch

  let userId

  let component

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector')
    spyOnUseSelector.mockReturnValue(false)
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch')
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch)

    userId = 23

    component = setUp({match: {params: {userId}}})
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('to match snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
