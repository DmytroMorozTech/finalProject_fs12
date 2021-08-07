import * as actions from './messageActionTypes'

const initialState = {
  chats: [],
  messages: []
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload]
      }
    case actions.CREATE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case actions.ADD_USER:
      const {chatId} = action.payload
      const chatsCopy = [...state.chats]
      chatsCopy.filter(chat => chat.id === chatId)[0] = action.payload
      return {
        ...state,
        chats: chatsCopy
      }
    default: {
      return state
    }
  }
}

export default messageReducer