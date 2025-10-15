import { Colors } from "@/constants/theme";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/font/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Slot />
      <StatusBar style="Light" />
    </View>
  );
};

export default RootLayout;
