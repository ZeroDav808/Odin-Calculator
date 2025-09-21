const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const mult = function (a, b) {
  return a * b;
};

const div = function (a, b) {
  if (b == 0) {
    return `Can't divide by zero!`;
  }

  return a / b;
};

function operate(operand1, operand2, operation) {
  switch (operation) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return sub(operand1, operand2);
    case "*":
      return mult(operand1, operand2);
    case "/":
      return div(operand1, operand2);
    default:
      return "An invalid operation was used."; // It's good practice to return a value for all cases.
  }
}

function handleNumber(value) {
  const operation = calculatorValues.operation1;

  if (!operation) {
    if (!calculatorValues.num1) {
      calculatorValues.num1 = value;
    } else {
      calculatorValues.num1 += value;
    }
    console.log(`Num1's values is: ${calculatorValues.num1}`);
    display.textContent = calculatorValues.num1;
  } else if (operation) {
    if (!calculatorValues.num2) {
      calculatorValues.num2 = value;
    } else {
      calculatorValues.num2 += value;
    }
    console.log(`Num2's values is: ${calculatorValues.num2}`);
    display.textContent = calculatorValues.num2;
  }
}

function handleOperation(value) {
  console.log(`The operation inputed is: ${value}`);
  console.log(`Current values are: Num1${calculatorValues.num1}, Num2${calculatorValues.num2}`);
  if (
    calculatorValues.num1 &&
    calculatorValues.operation1 &&
    calculatorValues.num2
  ) {
    console.log(`Num1, operation, and Num2 are full. Operation has been chained. Now completing calculation.
        The current value of operation is: ${calculatorValues.operation1}`);
    const result = operate(
      +calculatorValues.num1,
      +calculatorValues.num2,
      calculatorValues.operation1
    );
    calculatorValues.num1 = result;
    display.textContent = result;
    calculatorValues.num2 = null;
  }

  calculatorValues.operation1 = value;
  console.log(
    `The current value of operation is: ${calculatorValues.operation1}`
  );
}

function handleClear() {
  for (let key in calculatorValues) {
    calculatorValues[key] = null;
    console.log(`${key}'s values is now ${calculatorValues[key]}`);
  }
  display.textContent = "";
}

function handleEqual(){
    if(calculatorValues.num1 && calculatorValues.num2 && calculatorValues.operation1){
        const result = operate(+calculatorValues.num1, +calculatorValues.num2, calculatorValues.operation1);
        display.textContent = result;
        calculatorValues.num1 = result; // The result becomes the new num1
        calculatorValues.num2 = null; // Clear num2
        calculatorValues.operation1 = null; // Clear the operation
    }
}

function handleClick(e) {
  const value = e.target;
  const className = e.target.className;

  switch (className) {
    case "number":
      handleNumber(value.textContent);
      break;
    case "operation":
      handleOperation(value.textContent);
      break;
    case "clear":
      handleClear();
      break;
    case "equal":
      handleEqual();
      break;
  }
}

let calculatorValues = {
  num1: null,
  num2: null,
  operation1: null,
  result: null,
};
const container = document.querySelector("#button-container");
const display = document.querySelector("#display-container");

container.addEventListener("click", handleClick);
