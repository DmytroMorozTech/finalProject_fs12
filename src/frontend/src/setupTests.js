import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'
import enableHooks from 'jest-react-hooks-shallow'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
global.toJson = toJson

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}

// pass an instance of jest to `enableHooks()`
enableHooks(jest)

// String.prototype.replaceAll is not implemented in Node.js of versions until v16.8.0
const replaceAllPolyfill = require('string.prototype.replaceall')
// eslint-disable-next-line no-extend-native
String.prototype.replaceAll = String.prototype.replaceAll || replaceAllPolyfill
