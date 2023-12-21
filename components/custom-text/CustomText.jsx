import React from "react";
import { Text } from "react-native";
import CustomTextStyle from "./CustomText.style";

const CustomText = ({ children, style }) => {
  return <Text style={[CustomTextStyle.baseTextStyle, style]}>{children}</Text>;
};

export default CustomText;
