import http from '../../services/httpService'
import { toast } from 'react-toastify'

export const uploadPostVideoAction = (file) => {
  const formData = new FormData()
  formData.append('file', file)

  return http
    .post(`/api/media/videos/upload/post`, formData,
      {
        headers: {'content-type': 'multipart/form-data'}
      })
    .then((res) => res.data) // here we get postVideoPublicId
    .catch(err => {
      const errorMsg = err.response.data.message
      toast.error(errorMsg)
    })
}
