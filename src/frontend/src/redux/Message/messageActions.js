import * as actions from './messageActionTypes'
import http from '../../services/httpService'

export const createChatAction = () => (dispatch) => {
  return http
    .post('../../api/chats')
    .then(res => {
      const newChatData = res.data
      dispatch({
        type: actions.CREATE_CHAT, payload: newChatData
      })
    })
}

export const createMessageAction = ({chatId, text}) => (dispatch) => {
  return http
    .post('../../api/messages', {chatId: chatId, text: text})
    .then(res => {
      const newMessageData = res.data
      dispatch({
        type: actions.CREATE_MESSAGE, payload: newMessageData
      })
    })
    .then(() => dispatch(getChatMessagesAction(chatId)))
}

export const addUserAction = ({userId, chatId}) => (dispatch) => {
  return http
    .put('../../api/chats', {userId, chatId})
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
    .get(`../../api/chats/user/${userId}`)
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
    .get(`../../api/messages/chat/${chatid}`)
    .then(res => {
      const chatMessages = res.data
      dispatch({
        type: actions.GET_CHAT_MESSAGES, payload: {chatid, chatMessages}
      })
      dispatch({type: actions.LOADING_MESSAGES, payload: false})
    })
}

export const createChatWithBothMembersAction = ({userId, text}) => (dispatch) => {
  let newChatId = null
  return http
    .put(`../../api/chats/new/${userId}`, {text})
    .then(res => {
      const newChat = res.data
      newChatId = newChat.id
      dispatch({
        type: actions.CREATE_CHAT_WITH_BOTH_MEMBERS, payload: newChat
      })
    })
    .then(() => dispatch(getChatMessagesAction(newChatId)))
}

export const isTemporaryChatOpenAction = (status) => (dispatch) => {
  dispatch({ type: actions.TEMPORARY_CHAT_STATUS, payload: status })
}
