import { Image, Text, View } from "react-native";
import CustomText from "../custom-text/CustomText";
import ForecastListItemStyle from "./ForecastListItem.style";

const ForecastListItem = ({ image, day, date, temp }) => {
  return (
    <View style={ForecastListItemStyle.container}>
      <Image source={image} style={ForecastListItemStyle.img} />
      <CustomText style={ForecastListItemStyle.textStyle}>{day}</CustomText>
      <CustomText style={ForecastListItemStyle.textStyle}>{date}</CustomText>
      <CustomText style={ForecastListItemStyle.temp}>{temp}°</CustomText>
    </View>
  );
};

export default ForecastListItem;
