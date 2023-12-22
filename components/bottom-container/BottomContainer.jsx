import { View } from "react-native";
import BottomContainerStyle from "./BottomContainer.style";
import CustomText from "../custom-text/CustomText";

const BottomContainer = ({ dusk, dawn, wind }) => {
  return (
    <View style={BottomContainerStyle.container}>
      <View style={BottomContainerStyle.innerContainer}>
        <CustomText style={BottomContainerStyle.innerContainer_tt}>
          {dusk}
        </CustomText>
        <CustomText style={BottomContainerStyle.innerContainer_bt}>
          Aube
        </CustomText>
      </View>
      <View style={BottomContainerStyle.innerContainer}>
        <CustomText style={BottomContainerStyle.innerContainer_tt}>
          {dawn}
        </CustomText>
        <CustomText style={BottomContainerStyle.innerContainer_bt}>
          Crépuscule
        </CustomText>
      </View>
      <View style={BottomContainerStyle.innerContainer}>
        <CustomText style={BottomContainerStyle.innerContainer_tt}>
          {wind} Km/h
        </CustomText>
        <CustomText style={BottomContainerStyle.innerContainer_bt}>
          Vent
        </CustomText>
      </View>
    </View>
  );
};

export default BottomContainer;
