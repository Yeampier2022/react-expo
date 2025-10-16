import { useEffect, useRef, useState } from "react";

enum Operator {
  divide = "÷",
  time = "x",
  add = "+",
  mines = "-",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>(undefined);

  useEffect(() => {
    if (lastOperation.current) {
      const firstformulaPart = formula.split(" ").at(0);
      setFormula(`${firstformulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);
  useEffect(() => {
    const subResult = calculatorSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  useEffect(() => {}, [number]);
  const clean = () => {
    setNumber("0");
    setFormula("0");
    setPrevNumber("0");
    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number.startsWith("-")) {
      return setNumber(number.substring(1));
    } else {
      return setNumber("-" + number);
    }
  };
  const deleteLast = () => {
    if (number.length === 1) return setNumber("0");
    if (number.startsWith("-") && number.length === 2) return setNumber("0");

    return setNumber(number.slice(0, -1));
  };

  const setLastNumber = () => {
    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }
    setPrevNumber(number);
    setNumber("");
  };
  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };
  const timeOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.time;
  };
  const minesOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.mines;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResul = () => {
    const result = calculatorSubResult();
    setFormula(`${result}`)

    lastOperation.current = undefined;
    setPrevNumber('0')
  }

  const buildNumber = (numberString: string) => {
    if (number.includes(".") && number.startsWith(".")) return;
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

  const calculatorSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(" ");
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.divide:
        return num1 / num2;
      case Operator.time:
        return num1 * num2;
      case Operator.mines:
        return num1 - num2;

      default:
        throw new Error(`Operation ${operation} not implement`);
    }
  };

  return {
    buildNumber,
    formula,
    number,
    prevNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    timeOperation,
    minesOperation,
    addOperation,
    calculatorSubResult,
    calculateResul
  };
};
