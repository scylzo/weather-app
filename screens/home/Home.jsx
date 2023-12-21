import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import Style from "./Home.style";
import { MeteoAPI } from "../../api/meteo-api";
import TopContainer from "../../components/top-container/TopContainer";
import { getWeatherInterpretation } from "../../services/meteo-service";

const Home = () => {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();

  const current_weather = weather?.current_weather;

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
    }
  }, [coords]);

  const getUserCoords = async () => {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      return;
    }
  };

  const fetchWeather = async (coordinates) => {
    const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
    setWeather(weatherResponse);
  };

  return current_weather ? (
    <>
      <View style={Style.top_container}>
        <TopContainer
          temp={parseInt(current_weather?.temperature)}
          interpretation={getWeatherInterpretation(
            current_weather?.weathercode
          )}
        />
      </View>
      <View style={Style.searchbar}>
        <Text>Searchbar</Text>
      </View>
      <View style={Style.bottom_container}>
        <Text>Bottom container</Text>
      </View>
    </>
  ) : null;
};

export default Home;
