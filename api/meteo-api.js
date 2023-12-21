import axios from "axios";
export class MeteoAPI {
  static async fetchWeatherFromCoords(coords) {
    const result = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weather_code,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    );
    return result.data;
  }
}
