import * as actions from './modalActionTypes'
import {
  ADD_NEW_CERTIFICATION,
  ADD_NEW_EDUCATION,
  ADD_NEW_POST,
  EDIT_CERTIFICATION,
  EDIT_EDUCATION,
  EDIT_INTRO,
  USERS_WHO_LIKED_POST,
  USERS_WHO_LIKED_COMMENT,
  ADD_BACKGROUND_PHOTO,
  ADD_NEW_EXPERIENCE,
  EDIT_EXPERIENCE
} from './modalTypes'
import AddNewPost from '../../components/Main/Feed/AddNewPost/AddNewPost'
import UsersWhoLiked from '../../components/Main/Feed/UserWhoLiked/UsersWhoLiked'
import AddEducationModal from '../../components/ProfilePage/AddEducationModal/AddEducationModal'
import AddNewCertificationModal from '../../components/ProfilePage/AddNewCertificationModal/AddNewCertificationModal'
import EditEducationModal from '../../components/ProfilePage/EditEducationModal/EditEducationModal'
import EditIntroModal from '../../components/ProfilePage/EditIntroModal/EditIntroModal'
import EditCertificationModal from '../../components/ProfilePage/EditCertificationModal/EditCertificationModal'
import AddBackGroundPhotoModal from '../../components/ProfilePage/AddBackgroundPhotoModal/AddBackGroundPhotoModal'
import AddExperienceModal from '../../components/ProfilePage/AddExperienceModal/AddExperienceModal'
import UsersWhoLikedComment
  from '../../components/Main/Feed/Post/PostButton/NewCommentInput/Comment/UserWhoLikedComment/UsersWhoLikedComment'
import EditExperienceModal from '../../components/ProfilePage/EditExperiemceModal/EditExperienceModal'

const initialState = {
  isModalOpen: false,
  modalOpenType: null,
  modalContent: null,
  activePostId: null,
  activeCommentId: null
}

const modalReducer = (state = initialState, action) => {
  function getModalType () {
    const {modalType} = action.payload
    return modalType
  }

  const modalType = action.payload ? getModalType() : null
  const id = (modalType && action.payload.id) ? action.payload.id : null
  const commentId = (modalType && action.payload.commentId) ? action.payload.commentId : null

  switch (action.type) {
    case actions.TOGGLE_MODAL:
    {
      let content
      switch (modalType) {
        case ADD_NEW_POST:
          content = <AddNewPost/>
          break

        case ADD_NEW_CERTIFICATION:
          content = <AddNewCertificationModal/>
          break

        case EDIT_CERTIFICATION:
          content = <EditCertificationModal certification={action.payload.certification}/>
          break

        case USERS_WHO_LIKED_POST:
          content = <UsersWhoLiked/>
          break

        case USERS_WHO_LIKED_COMMENT:
          content = <UsersWhoLikedComment/>
          break

        case ADD_NEW_EDUCATION:
          content = <AddEducationModal/>
          break

        case EDIT_EDUCATION:
          content = <EditEducationModal education={action.payload.education}/>
          break

        case EDIT_INTRO:
          content = <EditIntroModal/>
          break

        case ADD_BACKGROUND_PHOTO:
          content = <AddBackGroundPhotoModal/>
          break

        case ADD_NEW_EXPERIENCE:
          content = <AddExperienceModal/>
          break

        case EDIT_EXPERIENCE :
          content = <EditExperienceModal workPlace={action.payload.workPlace}/>
          break

        default:
          content = ''
      }

      return {
        ...state,
        isModalOpen: !state.isModalOpen,
        modalOpenType: modalType,
        modalContent: content,
        activePostId: id,
        activeCommentId: commentId
      }
    }

    default: {
      return state
    }
  }
}

export default modalReducer
