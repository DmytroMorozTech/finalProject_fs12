import * as actions from './messageActionTypes'
import axios from 'axios'
import http from '../../services/httpService'

export const createChatAction = () => (dispatch) => {
  return http
    .post('/api/chats')
    .then(res => {
      const newChatData = res.data
      dispatch({
        type: actions.CREATE_CHAT, payload: newChatData
      })
    })
}

export const createMessageAction = ({chatId, text}) => (dispatch) => {
  return http
    .post('/api/messages', {chatId: chatId, text: text})
    .then(res => {
      const newMessageData = res.data
      dispatch({
        type: actions.CREATE_MESSAGE, payload: newMessageData
      })
    })
}

export const addUserAction = ({chatId, userId}) => (dispatch) => {
  return http
    .put('/api/chats', {chatId, userId})
    .then(res => {
      const updatedChat = res.data
      dispatch({
        type: actions.ADD_USER, payload: updatedChat
      })
    })
}

export const getUserChats = (userId) => (dispatch) => {
  return http
    .get(`/api/chats/user/${userId}`)
    .then(res => {
      const userChats = res.data
      dispatch({
        type: actions.GET_USER_CHATS, payload: userChats
      })
    })
}