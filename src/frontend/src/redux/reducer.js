import {combineReducers} from 'redux'
import modalReducer from './Modal/modalReducer'
import userReducer from './User/userReducer'
import postReducer from './Post/postReducer'
import messageReducer from './Message/messageReducer'
import certificationReducer from './Certification/certificationReducer'

const reducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  posts: postReducer,
  messages: messageReducer,
  certifications: certificationReducer
})

export default reducer