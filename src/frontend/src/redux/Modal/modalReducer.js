import * as actions from './modalActionTypes'
import {ADD_NEW_POST, SHOW_USERS_WHO_LIKED_POST} from '../../components/Modal/modalTypes'
import AddNewPost from '../../components/Main/Feed/AddNewPost/AddNewPost'
import UsersWhoLiked from '../../components/Main/Feed/UserWhoLiked/UsersWhoLiked'

const initialStore = {
  isModalOpen: false,
  modalOpenType: null,
  modalContent: null
}

const modalReducer = (store = initialStore, action) => {
  const {modalType, postId} = {...action.payload}

  const typeOfModal = action.payload ? modalType : null

  switch (action.type) {
    case actions.TOGGLE_MODAL:
    {
      let content
      switch (typeOfModal) {
        case ADD_NEW_POST:
          content = <AddNewPost/>
          break

        case SHOW_USERS_WHO_LIKED_POST:
          content = <UsersWhoLiked postId={postId}/>
          break

        default:
          content = ''
      }
      
      return {
        ...store,
        isModalOpen: !store.isModalOpen,
        modalOpenType: typeOfModal,
        modalContent: content
      }
    }
      
    default: {
      return store
    }
  }
}

export default modalReducer