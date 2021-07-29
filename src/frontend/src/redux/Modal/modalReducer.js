import * as actions from './modalActionTypes'
import {ADD_NEW_POST} from '../../components/Modal/modalTypes'
import AddNewPost from '../../components/Main/Feed/AddNewPost/AddNewPost'

const initialStore = {
  isModalOpen: false,
  modalOpenType: null,
  modalContent: null
}

const modalReducer = (store = initialStore, action) => {
  function getModalType () {
    const {modalType} = action.payload
    return modalType
  }

  const modalType = action.payload ? getModalType() : null // ADD_NEW_POST

  switch (action.type) { // TOGGLE_MODAL
    case actions.TOGGLE_MODAL:
    {
      let content
      switch (modalType) {
        case ADD_NEW_POST:
          content = <AddNewPost/>
          break

        default:
          content = ''
      }
      
      return {
        ...store,
        isModalOpen: !store.isModalOpen,
        modalOpenType: modalType,
        modalContent: content
      }
    }
      
    default: {
      return store
    }
  }
}

export default modalReducer