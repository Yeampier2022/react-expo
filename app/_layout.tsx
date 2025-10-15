import { globalStyles } from "@/styles/global-styles";
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";

const RootLayout = () => {
  const isAndroid = Platform.OS == "android";

  if (isAndroid) {
    NavigationBar.setBackgroundColorAsync("black");
  }
  const [loaded] = useFonts({
    SpaceMono: require("../assets/font/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
