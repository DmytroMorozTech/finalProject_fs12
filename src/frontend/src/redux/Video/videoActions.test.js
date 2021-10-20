import http from '../../services/httpService'
import { uploadPostVideoAction } from './videoActions'

jest.mock('../../services/httpService', () => ({
  post: jest.fn()
}))

it('testing uploadPostVideoAction', () => {
  const testVideo = {
    name: 'video.mkv',
    size: 7110,
    type: 'video/mkv'
  }
  const testResponse = 'Test response'
  http.post.mockResolvedValue({ data: testResponse })

  uploadPostVideoAction(testVideo)

  expect(http.post).toHaveBeenCalledTimes(1)
})
