import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import img_bg from "./assets/background.png";
import Home from "./screens/home/Home";
import AppStyle from "./App.style";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });

  console.log(isFontLoaded);
  return (
    <ImageBackground
      source={img_bg}
      style={AppStyle.img_bg}
      imageStyle={AppStyle.img_style}
    >
      <SafeAreaProvider>
        <SafeAreaView style={AppStyle.app_container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
