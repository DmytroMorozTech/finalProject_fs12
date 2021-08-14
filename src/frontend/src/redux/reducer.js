import {combineReducers} from 'redux'
import modalReducer from './Modal/modalReducer'
import userReducer from './User/userReducer'
import postReducer from './Post/postReducer'
import messageReducer from './Message/messageReducer'

const reducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  posts: postReducer,
  messages: messageReducer
})

export default reducer