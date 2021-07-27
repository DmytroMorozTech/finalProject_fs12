import {combineReducers} from 'redux'
import modalReducer from './Modal/modalReducer'

const reducer = combineReducers({
  toggleModal: modalReducer
})

export default reducer