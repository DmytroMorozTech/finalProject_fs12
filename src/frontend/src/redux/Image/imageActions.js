import http from '../../services/httpService'
import getHeaders from '../../services/headersService'

export const uploadImageToCloudinary = (file) => (dispatch) => {
  const formData = new FormData()
  formData.append('file', file)
  
  return http
    .post(`/api/media/upload/`, formData,
      {
        headers: {
          ...getHeaders(),
          'content-type': 'multipart/form-data'
          // 'content-type': 'multipart/form-data;boundary=abc' -> boundary turned out to be not needed
          // when file was wrapped into a FormData obj
        }
      })
    .then((res) => console.log(res))
}
