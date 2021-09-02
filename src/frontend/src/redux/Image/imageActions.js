import http from '../../services/httpService'
import * as actions from '../Profile/profileActionTypes'
import { toast } from 'react-toastify'
import toggleModalAction from '../Modal/modalActions'

export const uploadAvatarImgAction = (file) => (dispatch) => {
  const formData = new FormData()
  formData.append('file', file)
  
  return http
    .post(`/api/images/upload/avatar`, formData,
      {
        headers: {'content-type': 'multipart/form-data'}
      })
    .then((res) => res.data)
    .then((profile) => {
      dispatch({ type: actions.SAVE_ACTIVE_PROFILE, payload: profile })
      dispatch(toggleModalAction())
      toast.info('User\'s avatar image was updated',
        {position: toast.POSITION.TOP_CENTER, autoClose: 2500})
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}

export const uploadProfileBgImgAction = (file) => (dispatch) => {
  const formData = new FormData()
  formData.append('file', file)

  return http
    .post(`/api/images/upload/profile-bg`, formData,
      {
        headers: {'content-type': 'multipart/form-data'}
      })
    .then((res) => res.data)
    .then((profile) => {
      dispatch({ type: actions.SAVE_ACTIVE_PROFILE, payload: profile })
      dispatch(toggleModalAction())
      toast.info('Image for User\'s profile background was updated',
        {position: toast.POSITION.TOP_CENTER, autoClose: 2500})
    })
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}
