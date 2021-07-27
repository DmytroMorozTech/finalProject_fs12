import * as actions from './modalActionTypes'

const toggleModalAction = (modalType) => (dispatch) => dispatch({
  type: actions.TOGGLE_MODAL,
  payload: {modalType}
})

export default toggleModalAction