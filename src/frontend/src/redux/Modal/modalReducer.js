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

  const type = action.payload ? getModalType() : null // ADD_NEW_POST

  switch (action.type) { // TOGGLE_MODAL
    case actions.TOGGLE_MODAL:
    {
      let content
      switch (type) {
        case ADD_NEW_POST:
          content = <AddNewPost/>
          break

        default:
          content = <h1>Default case</h1>
      }
      
      return {
        ...store,
        isModalOpen: !store.isModalOpen,
        modalOpenType: type,
        modalContent: content
      }
    }
      
    default: {
      return store
    }
  }
}

export default modalReducer