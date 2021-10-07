import * as actions from './modalActionTypes'
import {
  ADD_NEW_CERTIFICATION,
  ADD_NEW_EDUCATION,
  ADD_NEW_EXPERIENCE,
  ADD_NEW_POST,
  EDIT_CERTIFICATION,
  EDIT_EDUCATION,
  EDIT_EXPERIENCE,
  EDIT_INTRO,
  SEND_MESSAGE,
  UPLOAD_AVATAR_IMG,
  UPLOAD_PROFILE_BACKGROUND_IMG,
  USERS_WHO_LIKED_COMMENT,
  USERS_WHO_LIKED_POST
} from './modalTypes'
import AddNewPost from '../../components/Main/Feed/AddNewPost/AddNewPost'
import UsersWhoLikedPost from '../../components/Main/Feed/Post/UserWhoLikedPost/UsersWhoLikedPost'
import UsersWhoLikedComment
  from '../../components/Main/Feed/Post/PostButton/NewCommentInput/Comment/UserWhoLikedComment/UsersWhoLikedComment'
import EducationModal from '../../components/ProfilePage/ProfileModal/EducationModal/EducationModal'
import IntroModal from '../../components/ProfilePage/ProfileModal/IntroModal/IntroModal'
import CertificationModal from '../../components/ProfilePage/ProfileModal/CertificationModal/CertificationModal'
import ExperienceModal from '../../components/ProfilePage/ProfileModal/ExperienceModal/ExperienceModal'
import UploadProfileBgImgModal from '../../components/ProfilePage/UploadProfileBgImgModal/UploadProfileBgImgModal'
import UploadAvatarModal from '../../components/ProfilePage/UploadAvatarModal/UploadAvatarModal'
import SendPostLink from '../../components/Main/Feed/Post/PostButton/SendPostLink/SendPostLink'

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
          content = <CertificationModal/>
          break

        case EDIT_CERTIFICATION:
          content = <CertificationModal certification={action.payload.certification}/>
          break

        case USERS_WHO_LIKED_POST:
          content = <UsersWhoLikedPost/>
          break

        case USERS_WHO_LIKED_COMMENT:
          content = <UsersWhoLikedComment/>
          break

        case ADD_NEW_EDUCATION:
          content = <EducationModal/>
          break

        case EDIT_EDUCATION:
          content = <EducationModal education={action.payload.education}/>
          break

        case EDIT_INTRO:
          content = <IntroModal profile={action.payload}/>
          break

        case UPLOAD_PROFILE_BACKGROUND_IMG:
          content = <UploadProfileBgImgModal/>
          break

        case UPLOAD_AVATAR_IMG:
          content = <UploadAvatarModal/>
          break

        case ADD_NEW_EXPERIENCE:
          content = <ExperienceModal/>
          break

        case EDIT_EXPERIENCE :
          content = <ExperienceModal workPlace={action.payload.workPlace}/>
          break

        case SEND_MESSAGE :
          content = <SendPostLink postId={id}/>
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
