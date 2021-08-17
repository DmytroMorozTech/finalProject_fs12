import * as actions from './messageActionTypes'
import http from '../../services/httpService'

export const createChatAction = () => (dispatch) => {
  return http
    .post('/api/chats', {}, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
    .then(res => {
      const newChatData = res.data
      dispatch({
        type: actions.CREATE_CHAT, payload: newChatData
      })
    })
}

export const createMessageAction = ({chatId, text}) => (dispatch) => {
  return http
    .post('/api/messages', {chatId: chatId, text: text}, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
    .then(res => {
      const newMessageData = res.data
      dispatch({
        type: actions.CREATE_MESSAGE, payload: newMessageData
      })
    })
    .then(() => dispatch(getChatMessagesAction(chatId)))
}

export const addUserAction = ({chatId, userId}) => (dispatch) => {
  return http
    .put('/api/chats', {chatId, userId}, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
    .then(res => {
      const updatedChat = res.data
      dispatch({
        type: actions.ADD_USER, payload: updatedChat
      })
    })
}

export const getUserChatsAction = (userId) => (dispatch) => {
  return http
    .get(`/api/chats/user/${userId}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
    .then(res => {
      const userChats = res.data
      dispatch({
        type: actions.GET_USER_CHATS, payload: userChats
      })
    })
}

export const getChatMessagesAction = (chatid) => (dispatch) => {
  return http
    .get(`/api/messages/chat/${chatid}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
    .then(res => {
      const chatMessages = res.data
      dispatch({
        type: actions.GET_CHAT_MESSAGES, payload: {chatid, chatMessages}
      })
    })
}
