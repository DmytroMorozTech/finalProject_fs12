import * as actions from './modalActionTypes'

const initialStore = {
  isModalOpen: false,
  modalOpenType: null
}

const modalReducer = (store = initialStore, action) => {
  function getModalType () {
    const {modalType} = action.payload
    return modalType
  }

  const type = action.payload ? getModalType() : null

  switch (action.type) {
    case actions.TOGGLE_MODAL:
      return {
        ...store,
        isModalOpen: !store.isModalOpen,
        modalOpenType: type
      }
    default: {
      return store
    }
  }
}

export default modalReducer