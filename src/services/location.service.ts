export default class LocationService {
  get(successCallback: PositionCallback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback)
      return true
    } else {
      return null
    }
  }
}
