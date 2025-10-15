import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {


  const {formula, buildNumber} = useCalculator()
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}></View>
      <ThemeText variant="h1">{formula}</ThemeText>
      {/* <ThemeText variant="h2">{formula}</ThemeText> */}

      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          onPress={() => console.log("c")}
          blackText
          color={Colors.lightGray}
        ></CalculatorButton>
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("+/-")}
        ></CalculatorButton>
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("del")}
        ></CalculatorButton>
        <CalculatorButton
          label="÷"
          color={Colors.oragen}
          onPress={() => console.log("÷")}
        ></CalculatorButton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          onPress={() => buildNumber("7")}
        ></CalculatorButton>
        <CalculatorButton
          label="8"
          onPress={() => buildNumber("8")}
        ></CalculatorButton>
        <CalculatorButton
          label="9"
          onPress={() => buildNumber("9")}
        ></CalculatorButton>
        <CalculatorButton
          label="X"
          color={Colors.oragen}
          onPress={() => console.log("X")}
        ></CalculatorButton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="6"
          onPress={() => buildNumber("6")}
        ></CalculatorButton>
        <CalculatorButton
          label="5"
          onPress={() => buildNumber("5")}
        ></CalculatorButton>
        <CalculatorButton
          label="4"
          onPress={() => buildNumber("4")}
        ></CalculatorButton>
        <CalculatorButton
          label="-"
          color={Colors.oragen}
          onPress={() => console.log("-")}
        ></CalculatorButton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="3"
          onPress={() => buildNumber("3")}
        ></CalculatorButton>
        <CalculatorButton
          label="2"
          onPress={() => buildNumber("2")}
        ></CalculatorButton>
        <CalculatorButton
          label="1"
          onPress={() => buildNumber("1")}
        ></CalculatorButton>
        <CalculatorButton
          label="+"
          color={Colors.oragen}
          onPress={() => console.log("+")}
        ></CalculatorButton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          widthButton
          onPress={() => buildNumber("0")}
        ></CalculatorButton>
        <CalculatorButton
          label="."
          onPress={() => buildNumber(".")}
        ></CalculatorButton>
        <CalculatorButton
          label="="
          onPress={() => console.log("=")}
        ></CalculatorButton>
      </View>
    </View>
  );
};

export default CalculatorApp;
