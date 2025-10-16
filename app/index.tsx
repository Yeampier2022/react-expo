import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/theme";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
  const {
    formula,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    prevNumber,
    timeOperation,
    minesOperation,
    addOperation,
    calculatorSubResult,
    calculateResul
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>

        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          onPress={() => clean()}
          blackText
          color={Colors.lightGray}
        ></CalculatorButton>
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => toggleSign()}
        ></CalculatorButton>
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={() => deleteLast()}
        ></CalculatorButton>
        <CalculatorButton
          label="÷"
          color={Colors.oragen}
          onPress={divideOperation}
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
          onPress={() => timeOperation()}
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
          onPress={minesOperation}
        ></CalculatorButton>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          onPress={() => buildNumber("1")}
        ></CalculatorButton>

        <CalculatorButton
          label="2"
          onPress={() => buildNumber("2")}
        ></CalculatorButton>
        <CalculatorButton
          label="3"
          onPress={() => buildNumber("3")}
        ></CalculatorButton>

        <CalculatorButton
          label="+"
          color={Colors.oragen}
          onPress={() => addOperation()}
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
          onPress={() => calculateResul()}
        ></CalculatorButton>
      </View>
    </View>
  );
};

export default CalculatorApp;
