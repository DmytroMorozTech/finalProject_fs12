import axios from 'axios'
import {toast} from 'react-toastify'

axios.interceptors.response.use(null, error => {
  const expectedError =
        error.response && error.response.status >= 400 && error.response.status < 500

  if (!expectedError) {
    console.log('Logging the error', error)
    toast.error('An unexpected error occurred.')
  }
  return Promise.reject(error)
})

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  config.headers.content_type = 'application/json'
  config.headers.accept = 'application/json'

  return config
})

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
}

export default httpService
