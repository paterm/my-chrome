export default class GeocodeService {
  async geocode(lat: number, lon: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=jsonv2`;
    return fetch(url).then((response) => response.json()).then((response) => response.address)
  }
}
