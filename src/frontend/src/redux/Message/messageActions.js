import * as actions from './messageActionTypes'
import axios from 'axios'

export const createChatAction = () => (dispatch) => {
  return axios.post('/api/chats')
    .then(res => {
      const newChatData = res.data
      dispatch({
        type: actions.CREATE_CHAT, payload: newChatData
      })
    })
}

export const createMessageAction = ({chatId, text}) => (dispatch) => {
  return axios.post('/api/messages', {chatId, text})
    .then(res => {
      const newMessageData = res.data
      dispatch({
        type: actions.CREATE_MESSAGE, dispatch: newMessageData
      })
    })
}

export const addUserAction = ({chatId, userId}) => (dispatch) => {
  return axios.put('/api/chats', {chatId, userId})
    .then(res => {
      const updatedChat = res.data
      dispatch({
        type: actions.ADD_USER, dispatch: updatedChat
      })
    })
}