import * as actions from './modalActionTypes'
import {ADD_NEW_POST} from '../../components/Modal/modalTypes'
import AddNewPost from '../../components/Main/Feed/AddNewPost/AddNewPost'

const initialState = {
  isModalOpen: false,
  modalOpenType: null,
  modalContent: null
}

const modalReducer = (state = initialState, action) => {
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
        ...state,
        isModalOpen: !state.isModalOpen,
        modalOpenType: modalType,
        modalContent: content
      }
    }
      
    default: {
      return state
    }
  }
}

export default modalReducer