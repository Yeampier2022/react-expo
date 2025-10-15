import CalculatorButton from "@/components/CalculatorButton";
import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}></View>
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
          onPress={() => console.log("7")}
        ></CalculatorButton>
        <CalculatorButton
          label="8"
          onPress={() => console.log("8")}
        ></CalculatorButton>
        <CalculatorButton
          label="9"
          onPress={() => console.log("9")}
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
          onPress={() => console.log("6")}
        ></CalculatorButton>
        <CalculatorButton
          label="5"
          onPress={() => console.log("5")}
        ></CalculatorButton>
        <CalculatorButton
          label="4"
          onPress={() => console.log("4")}
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
          onPress={() => console.log("3")}
        ></CalculatorButton>
        <CalculatorButton
          label="2"
          onPress={() => console.log("2")}
        ></CalculatorButton>
        <CalculatorButton
          label="1"
          onPress={() => console.log("1")}
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
          onPress={() => console.log("0")}
        ></CalculatorButton>
        <CalculatorButton
          label="."
          onPress={() => console.log(".")}
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
