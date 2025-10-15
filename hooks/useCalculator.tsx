import { useEffect, useRef, useState } from "react";

enum Operator {
  divide = "÷",
  time = "x",
  sum = "+",
  mines = "-",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>(undefined);

  useEffect(() => {
    setFormula(number);
  }, [number]);

  const buildNumber = (numberString: string) => {

    if(number.includes('.') && number.startsWith('.') )  return
    if (number.startsWith("0") || number.startsWith("-0")) {
      if (number === ".") {
        return setNumber(number + numberString);
      }
      // evaluar si es otro cero y no hay punto
      if (numberString === "0" && !number.includes(".")) {
        return setNumber(number + numberString);
      }
      // Evaluar si es diferente cero no hay punto y es el primer numero
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }
      // evita el 000.000

      if (numberString == "0" && !number.includes(".")) {
        return;
      }
    }
    setNumber(number + numberString);
  };

  return {
    buildNumber,
    formula,
    number,
    prevNumber,
  };
};
