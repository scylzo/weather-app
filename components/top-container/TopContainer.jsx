import { Image, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/custom-text/CustomText";
import TopContainerStyle from "./TopContainer.style";
import Clock from "../clock/Clock";

const TopContainer = ({ temp, interpretation, city, handleNavigation }) => {
  const { label, image } = interpretation;
  return (
    <>
      <View style={TopContainerStyle.clock}>
        <Clock />
      </View>
      <View>
        <CustomText>{city}</CustomText>
      </View>

      <CustomText style={TopContainerStyle.weather_label}>{label}</CustomText>

      <View style={TopContainerStyle.temp_container}>
        <TouchableOpacity onPress={() => handleNavigation()}>
          <CustomText style={TopContainerStyle.tempTextStyle}>
            {temp}°
          </CustomText>
        </TouchableOpacity>
        <Image style={TopContainerStyle.img} source={image} />
      </View>
    </>
  );
};

export default TopContainer;
