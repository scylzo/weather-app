import { TouchableOpacity, View } from "react-native";
import ForecastStyle from "./Forecast.style";
import Container from "../../components/container/Container";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomText from "../../components/custom-text/CustomText";
import ForecastListItem from "../../components/forecast-list-item/ForecastListItem";
import { DAYS, getDateDDMM } from "../../services/date-service";
import { getWeatherInterpretation } from "../../services/meteo-service";

const Forecast = () => {
  const { params } = useRoute();
  const { goBack } = useNavigation();

  const backButton = (
    <TouchableOpacity style={ForecastStyle.back_btn} onPress={() => goBack()}>
      <CustomText>{"<"}</CustomText>
    </TouchableOpacity>
  );

  const header = (
    <View style={ForecastStyle.header}>
      {backButton}
      <View style={ForecastStyle.header_txts}>
        <CustomText>{params.city}</CustomText>
        <CustomText style={ForecastStyle.subtitle}>
          {" "}
          Prévision sur 7 jours{" "}
        </CustomText>
      </View>
    </View>
  );

  const forecastList = (
    <View style={ForecastStyle.forecast_list}>
      {params?.time?.map((time, index) => {
        const code = params?.weather_code[index];
        const image = getWeatherInterpretation(code)?.image;
        const date = new Date(time);
        const day = DAYS[date.getDay()];
        const d = getDateDDMM(time);
        const temp = params.temperature_2m_max[index];
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={day}
            date={d}
            temp={temp.toFixed(0)}
          />
        );
      })}
    </View>
  );

  return (
    <Container style={ForecastStyle.container}>
      {header}
      {forecastList}
    </Container>
  );
};

export default Forecast;
