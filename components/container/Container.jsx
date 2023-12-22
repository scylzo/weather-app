import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import img_bg from "../../assets/background.png";
import ContainerStyle from "./Container.style";

const Container = ({ children }) => {
  return (
    <ImageBackground
      source={img_bg}
      style={ContainerStyle.img_bg}
      imageStyle={ContainerStyle.img_style}
    >
      <SafeAreaProvider>
        <SafeAreaView style={ContainerStyle.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default Container;
