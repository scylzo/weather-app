import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";

import Home from "./screens/home/Home";
import AppStyle from "./App.style";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Forecast from "./screens/forecast/Forecast";
import Container from "./components/container/Container";

const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });

  return (
    <NavigationContainer theme={navTheme}>
      {isFontLoaded && (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false, animation: "fade" }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
