import * as actions from './messageActionTypes'

const initialState = {
  chatsList: [],
  messagesList: [],
  chatMessages: {},
  newChatData: [],
  newChatId: '',
  isLoading: false,
  isTemporaryChatOpen: false
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_CHAT:
      return {
        ...state,
        chatsList: [...state.chatsList, action.payload],
        newChatData: action.payload
      }
    case actions.CREATE_MESSAGE:
      return {
        ...state,
        messagesList: [...state.messagesList, action.payload]
      }
    case actions.ADD_USER:
      const {chatId} = action.payload
      const chatsCopy = [...state.chatsList]
      chatsCopy.filter(chat => chat.id === chatId)[0] = action.payload
      return {
        ...state,
        chatsList: chatsCopy
      }
    case actions.GET_USER_CHATS:
      return {
        ...state,
        chatsList: action.payload
      }
    case actions.GET_CHAT_MESSAGES:
      const {chatid, chatMessages} = action.payload
      return {
        ...state,
        chatMessages: {...state.chatMessages, [chatid]: chatMessages}
      }
    case actions.CREATE_CHAT_WITH_BOTH_MEMBERS:
      const newChat = action.payload
      return {
        ...state,
        chatsList: [...state.chatsList, action.payload],
        newChatData: action.payload,
        newChatId: newChat.id
      }
    case actions.TEMPORARY_CHAT_STATUS:
      return {
        ...state,
        isTemporaryChatOpen: action.payload
      }
    case actions.RESET_NEW_CHAT_DATA:
      return {
        ...state,
        newChatData: [],
        newChatId: ''
      }
    case actions.FIND_CHAT_BY_CHAT_MEMBER:
      return {
        ...state,
        chatsList: action.payload
      }
    default
    : {
      return state
    }
  }
}

export default messageReducer
