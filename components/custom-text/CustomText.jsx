import React from "react";
import { Text, useWindowDimensions } from "react-native";
import CustomTextStyle from "./CustomText.style";

const CustomText = ({ children, style }) => {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || CustomTextStyle.baseTextStyle.fontSize;
  return (
    <Text
      style={[
        CustomTextStyle.baseTextStyle,
        style,
        { fontSize: fontSize * 0.00118 * height },
      ]}
    >
      {children}
    </Text>
  );
};

export default CustomText;
