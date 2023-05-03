// Get references to HTML elements
const calculatorButtons = document.getElementById('buttons-container');
const display = document.getElementById('display');
const equalButton = document.getElementById('equal');

// Add event listener to the calculator buttons
calculatorButtons.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const buttonValue = event.target.value;
      
    if (isNumber(buttonValue)) {
      // Append the number value to the display
      display.value += buttonValue;
    } else if (isOperator(buttonValue)) {
      // Perform the operator operation on the values displayed
      display.value += buttonValue;
    } else if (buttonValue === 'C') {
      // Clear the display
      display.value = '';
    } else if (buttonValue === '=') {
      // Calculate and display the result
      display.value = eval(display.value);
    }
  }
});

// Add event listener to the equal button
equalButton.addEventListener('click', () => {
    // Get the arithmetic expression from the display
    const expression = display.value;
  
    // Split the expression into operands and operators
    const operands = expression.split(/[-+/*]/).map(parseFloat);
    const operators = expression.split(/\d+/).filter(Boolean);
  
    // Evaluate the expression
    let result = operands[0];
    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const operand = operands[i+1];
      switch (operator) {
        case '+':
          result += operand;
          break;
        case '-':
          result -= operand;
          break;
        case '*':
          result *= operand;
          break;
        case '/':
          result /= operand;
          break;
        default:
          console.error('Invalid operator:', operator);
      }
    }
  
    // Display the result
    display.value = result;
  });

  
// Check if the value is a number
function isNumber(value) {
  return !isNaN(value);
}

// Check if the value is an operator
function isOperator(value) {
  return value === '+' || value === '-' || value === '*' || value === '/';
}
