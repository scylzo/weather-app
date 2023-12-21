import { Image, View } from "react-native";
import CustomText from "../../components/custom-text/CustomText";
import TopContainerStyle from "./TopContainer.style";

const TopContainer = ({ temp, interpretation }) => {
  const { label, image } = interpretation;
  return (
    <>
      <View style={TopContainerStyle.clock}>
        <CustomText>Clock</CustomText>
      </View>
      <View>
        <CustomText>{"city"}</CustomText>
      </View>

      <CustomText style={TopContainerStyle.weather_label}>{label}</CustomText>

      <View style={TopContainerStyle.temp_container}>
        <CustomText style={TopContainerStyle.tempTextStyle}>{temp}°</CustomText>
        <Image style={TopContainerStyle.img} source={image} />
      </View>
    </>
  );
};

export default TopContainer;
