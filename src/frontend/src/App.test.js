// import {render, screen} from '@testing-library/react'
import React from 'react'
import App from './App'
//
// import Enzyme, { shallow } from 'enzyme'

// test('renders learn react link', () => {
//   render(<App/>)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

const setUp = (props) => shallow(<App {...props} />)

describe('should render App component', () => {
  let component
  beforeEach(() => {
    component = setUp()
  })

  it('should contain .App wrapper', () => {
    const wrapper = component.find('.App')
    expect(wrapper.length).toBe(1)
  })
})
