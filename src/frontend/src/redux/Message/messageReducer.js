import * as actions from './messageActionTypes'

const initialState = {
  chatsList: [],
  messagesList: []
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_CHAT:
      return {
        ...state,
        chatsList: [...state.chatsList, action.payload]
      }
    case actions.CREATE_MESSAGE:
      return {
        ...state,
        messagesList: [...state.messagesList, action.payload]
      }
    case actions.ADD_USER:
      const {chatId} = action.payload
      const chatsCopy = [...state.chats]
      chatsCopy.filter(chat => chat.id === chatId)[0] = action.payload
      return {
        ...state,
        chatsList: chatsCopy
      }
    default: {
      return state
    }
  }
}

export default messageReducer