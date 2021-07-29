import {combineReducers} from 'redux'
import modalReducer from './Modal/modalReducer'

const reducer = combineReducers({
  modal: modalReducer
})

export default reducer