import * as actions from './messageActionTypes'
import http from '../../services/httpService'
import getHeaders from '../../services/headersService'

export const createChatAction = () => (dispatch) => {
  return http
    .post('../../api/chats', {}, {headers: getHeaders()})
    .then(res => {
      const newChatData = res.data
      dispatch({
        type: actions.CREATE_CHAT, payload: newChatData
      })
    })
}

export const createMessageAction = ({chatId, text}) => (dispatch) => {
  return http
    .post('../../api/messages', {chatId: chatId, text: text}, {headers: getHeaders()})
    .then(res => {
      const newMessageData = res.data
      dispatch({
        type: actions.CREATE_MESSAGE, payload: newMessageData
      })
    })
    .then(() => dispatch(getChatMessagesAction(chatId)))
}

export const addUserAction = ({userId, chatId}) => (dispatch) => {
  console.log('Chat id in message actions when adding new user: ' + chatId)
  return http
    .put('../../api/chats', {userId, chatId}, {headers: getHeaders()})
    .then(res => {
      const updatedChat = res.data
      dispatch({
        type: actions.ADD_USER, payload: updatedChat
      })
    })
    .then(() => dispatch(getUserChatsAction(userId)))
}

export const getUserChatsAction = (userId) => (dispatch) => {
  dispatch({type: actions.LOADING_MESSAGES, payload: true})
  return http
    .get(`../../api/chats/user/${userId}`, {headers: getHeaders()})
    .then(res => {
      const userChats = res.data
      dispatch({
        type: actions.GET_USER_CHATS, payload: userChats
      })
      dispatch({type: actions.LOADING_MESSAGES, payload: false})
    })
}

export const getChatMessagesAction = (chatid) => (dispatch) => {
  dispatch({type: actions.LOADING_MESSAGES, payload: true})
  return http
    .get(`../../api/messages/chat/${chatid}`, {headers: getHeaders()})
    .then(res => {
      const chatMessages = res.data
      dispatch({
        type: actions.GET_CHAT_MESSAGES, payload: {chatid, chatMessages}
      })
      dispatch({type: actions.LOADING_MESSAGES, payload: false})
    })
}
