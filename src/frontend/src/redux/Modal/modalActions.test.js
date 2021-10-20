import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import toggleModalAction from './modalActions'
import * as modalActionTypes from './modalActionTypes'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

const flushPromises = () => new Promise(resolve => setImmediate(resolve))

it('testing toggleModalAction', async () => {
  const store = mockStore({})
  const payload = 'payload'

  store.dispatch(toggleModalAction(payload))

  await flushPromises()

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toEqual(modalActionTypes.TOGGLE_MODAL)
  expect(actions[0].payload).toEqual(payload)
})
