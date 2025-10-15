import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import { Pressable, Text } from "react-native";

import * as Haptics from "expo-haptics";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  onPress: () => void;
  widthButton?: boolean;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  onPress,
  widthButton = false,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: widthButton ? 180 : 80,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
