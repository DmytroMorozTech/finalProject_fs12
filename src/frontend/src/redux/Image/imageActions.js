import http from '../../services/httpService'
import getHeaders from '../../services/headersService'

export const uploadImageToCloudinary = (file) => (dispatch) => {
  console.log(file)

  return http
    .post(`/api/media/upload/`, file,
      {
        headers: {
          ...getHeaders(),
          'content-type': 'multipart/form-data;boundary=abc'
        }
      })
    .then((res) => console.log(res.data))
}
