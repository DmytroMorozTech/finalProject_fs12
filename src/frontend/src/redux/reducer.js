import {combineReducers} from 'redux'
import modalReducer from './Modal/modalReducer'
import userReducer from './User/userReducer'
import postReducer from './Post/postReducer'
import messageReducer from './Message/messageReducer'
import profileReducer from './Profile/profileReducer'
import commentReducer from './Comment/commentReducer'
import networkReducer from './Network/networkReducer'

const reducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  profile: profileReducer,
  posts: postReducer,
  messages: messageReducer,
  comments: commentReducer,
  network: networkReducer
})

export default reducer
