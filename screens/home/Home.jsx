import { useState, useEffect } from "react";
import { View } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import Style from "./Home.style";
import { MeteoAPI } from "../../api/meteo-api";
import TopContainer from "../../components/top-container/TopContainer";
import { getWeatherInterpretation } from "../../services/meteo-service";
import BottomContainer from "../../components/bottom-container/BottomContainer";
import { useNavigation } from "@react-navigation/native";
import Container from "../../components/container/Container";
import Searchbar from "../../components/searchbar/Searchbar";
import { Alert } from "react-native";

const Home = () => {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const { navigate } = useNavigation();
  const current_weather = weather?.current_weather;
  const daily = weather?.daily;

  useEffect(() => {
    getUserCoords();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fetchCity(coords);
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
  const fetchCity = async (coordinates) => {
    const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
    setCity(cityResponse);
  };

  const fetchCoordsByCity = async (city) => {
    if (city.trim().length !== 0) {
      try {
        const cityCoords = await MeteoAPI.fetchCoordsFromCity(city);
        setCoords(cityCoords);
      } catch (e) {
        Alert.alert("Oups!", e);
      }
    }
  };

  const handleNavigation = () => {
    navigate("Forecast", { city, ...daily });
  };

  return current_weather ? (
    <Container>
      <View style={Style.top_container}>
        <TopContainer
          handleNavigation={handleNavigation}
          temp={parseInt(current_weather?.temperature)}
          interpretation={getWeatherInterpretation(
            current_weather?.weathercode
          )}
          city={city}
        />
      </View>
      <View style={Style.searchbar}>
        <Searchbar handleSubmitSearch={fetchCoordsByCity} />
      </View>
      <View style={Style.bottom_container}>
        <BottomContainer
          dusk={daily.sunrise[0].split("T")[1]}
          dawn={daily.sunset[0].split("T")[1]}
          wind={current_weather.windspeed}
        />
      </View>
    </Container>
  ) : null;
};

export default Home;
