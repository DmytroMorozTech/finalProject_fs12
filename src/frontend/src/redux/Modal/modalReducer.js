import * as actions from './modalActionTypes'
import { ADD_NEW_CERTIFICATION, ADD_NEW_POST, SHOW_USERS_WHO_LIKED_POST } from '../../components/Modal/modalTypes'
import AddNewPost from '../../components/Main/Feed/AddNewPost/AddNewPost'
import UsersWhoLiked from '../../components/Main/Feed/UserWhoLiked/UsersWhoLiked'
import AddNewCertification from '../../components/ProfilePage/Certification/AddNewCertification'

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

        case ADD_NEW_CERTIFICATION:
          content = <AddNewCertification/>
          break

        case SHOW_USERS_WHO_LIKED_POST:
          content = <UsersWhoLiked/>
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