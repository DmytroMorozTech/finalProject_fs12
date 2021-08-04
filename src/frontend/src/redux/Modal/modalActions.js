import * as actions from './modalActionTypes'

const toggleModalAction = (payload) => (dispatch) => dispatch({
  type: actions.TOGGLE_MODAL,
  payload: {payload}
})

export default toggleModalAction