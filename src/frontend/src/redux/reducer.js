import {combineReducers} from 'redux'
import modalReducer from './Modal/modalReducer'
import userReducer from './User/userReducer'
import postReducer from './Post/postReducer'

const reducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  posts: postReducer
})

export default reducer