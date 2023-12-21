import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  weather_label: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
    fontSize: 20,
  },
  temp_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  tempTextStyle: {
    fontSize: 150,
  },
  img: {
    height: 90,
    width: 90,
  },
});
