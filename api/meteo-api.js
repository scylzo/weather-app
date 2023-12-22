import axios from "axios";
export class MeteoAPI {
  static async fetchWeatherFromCoords(coords) {
    const result = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weather_code,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    );
    return result.data;
  }
  static async fetchCityFromCoords(coords) {
    const { city, village } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
      )
    ).data.address;
    return city || village;
  }
  static async fetchCoordsFromCity(city) {
    try {
      const { latitude: lat, longitude: lng } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=fr&format=json`
        )
      ).data.results[0];
      return { lat, lng };
    } catch (e) {
      throw "Pas de coordonnées trouvées pour la recherche : " + city;
    }
  }
}
