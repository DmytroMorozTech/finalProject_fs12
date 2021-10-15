export const allMessages = (store) => store.messages.messagesList
export const allChats = (store) => store.messages.chatsList
export const chatMessages = (store) => store.messages.chatMessages
export const newChatData = (store) => store.messages.newChatData
export const newChatIdSelector = (store) => store.messages.newChatId
export const loading = (store) => store.messages.loading
export const isTemporaryChatOpenSelector = (store) => store.messages.isTemporaryChatOpen
export const selectedChatSelector = (store) => store.messages.selectedChat
