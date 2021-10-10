import React from 'react'
import App from './App'
import Enzyme, { shallow } from 'enzyme'
import * as redux from 'react-redux';

const setUp = (props) => shallow(<App {...props} />);

describe('should render App component', () => {
  let spyOnUseSelector;
  let spyOnUseDispatch;
  let mockDispatch = jest.fn()

  let component

  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(redux, 'useSelector');
    spyOnUseSelector.mockReturnValue(false);
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
    mockDispatch = jest.fn()
    spyOnUseDispatch.mockReturnValue(mockDispatch);

    component = setUp()
  })

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should contain .App wrapper', () => {
    const wrapper = component.find('.App')
    expect(wrapper.length).toBe(1)
  })
})
