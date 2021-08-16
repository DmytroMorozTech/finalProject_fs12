import * as actions from './modalActionTypes'
import {ADD_EDUCATION, ADD_NEW_POST, EDIT_EDUCATION, SHOW_USERS_WHO_LIKED_POST} from '../../components/Modal/modalTypes'
import AddNewPost from '../../components/Main/Feed/AddNewPost/AddNewPost'
import UsersWhoLiked from '../../components/Main/Feed/UserWhoLiked/UsersWhoLiked'
import AddEducationModal from '../../components/ProfilePage/AddEducationModal/AddEducationModal'
import EditEducationModal from '../../components/ProfilePage/EditEducationModal/EditEducationModal'

const initialState = {
  isModalOpen: false,
  modalOpenType: null,
  modalContent: null,
  activePostId: null
}

const modalReducer = (state = initialState, action) => {
  function getModalType () {
    const {modalType} = action.payload
    return modalType
  }

  const modalType = action.payload ? getModalType() : null
  const id = (modalType && action.payload.id) ? action.payload.id : null

  switch (action.type) {
    case actions.TOGGLE_MODAL:
    {
      let content
      switch (modalType) {
        case ADD_NEW_POST:
          content = <AddNewPost/>
          break

        case SHOW_USERS_WHO_LIKED_POST:
          content = <UsersWhoLiked/>
          break
        
        case ADD_EDUCATION:
          content = <AddEducationModal/>
          break

        case EDIT_EDUCATION:
          content = <EditEducationModal/>
          break
        
        default:
          content = ''
      }
      
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        modalOpenType: modalType,
        modalContent: content,
        activePostId: id
      }
    }
      
    default: {
      return state
    }
  }
}

export default modalReducer