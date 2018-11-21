import galleryRequests from './galleryRequests'
import recordingRequests from './recordingRequests'
import usersRequests from './usersRequests'

const apiMethods = {
  ...galleryRequests,
  ...recordingRequests,
  ...usersRequests
}

export default apiMethods
