import * as actions from './modalActionTypes'
import {
  ADD_EDUCATION, ADD_NEW_POST, ADD_NEW_CERTIFICATION,
  UPDATE_CERTIFICATION, EDIT_EDUCATION, EDIT_INTRO,
  USERS_WHO_LIKED_POST, ADD_BACKGROUND_PHOTO, ADD_EXPERIENCE
} from './modalTypes'
import AddNewPost from '../../components/Main/Feed/AddNewPost/AddNewPost'
import UsersWhoLiked from '../../components/Main/Feed/UserWhoLiked/UsersWhoLiked'
import AddEducationModal from '../../components/ProfilePage/AddEducationModal/AddEducationModal'
import AddNewCertification from '../../components/ProfilePage/AddNewCertification/AddNewCertification'
import EditEducationModal from '../../components/ProfilePage/EditEducationModal/EditEducationModal'
import EditIntroModal from '../../components/ProfilePage/EditIntroModal/EditIntroModal'
import EditCertification from '../../components/ProfilePage/EditCertificationModal/EditCertification'
import AddBackGroundPhotoModal from '../../components/ProfilePage/AddBackgroundPhotoModal/AddBackGroundPhotoModal'
import AddExperienceModal from '../../components/ProfilePage/AddExperienceModal/AddExperienceModal'

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

        case UPDATE_CERTIFICATION:
          content = <EditCertification/>
          break

        case USERS_WHO_LIKED_POST:
          content = <UsersWhoLiked/>
          break

        case ADD_EDUCATION:
          content = <AddEducationModal/>
          break

        case EDIT_EDUCATION:
          content = <EditEducationModal/>
          break

        case EDIT_INTRO:
          content = <EditIntroModal/>
          break

        case ADD_BACKGROUND_PHOTO:
          content = <AddBackGroundPhotoModal/>
          break

        case ADD_EXPERIENCE:
          content = <AddExperienceModal/>
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