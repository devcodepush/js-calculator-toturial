# js-calculator

GitHub Page [link](https://devcodepush.github.io/js-calculator/)

## Instruction
Here is a step-by-step guide on how to build a calculator project based on the HTML, CSS, and JavaScript

### How to

* Start by creating a new HTML file and save it with a .html extension. Add the basic HTML structure with the necessary meta tags, title, and a link to the CSS file.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

</body>
</html>
```

* Inside the body tag, create a div with the id "calculator" and another div inside it with the id "buttons-container". Add an input element with the id "display" inside the first div.

```
<body>
    <div class="calculator">

        <input id="calculator-display" type="text" class="calculator__display" readonly>
        <div class="calculator__buttons">

        </div>
        
    </div>
</body>
</html>
```

* Create buttons for each of the numbers, operators, clear, and equals, and add the appropriate values and ids to each button.

```
<body>
    <div class="calculator">
        <input id="calculator-display" type="text" class="calculator__display" readonly>
        <div class="calculator__buttons">
            <button type="button" class="calculator__button" data-value="7">7</button>
            <button type="button" class="calculator__button" data-value="8">8</button>
            <button type="button" class="calculator__button" data-value="9">9</button>
            <button type="button" class="calculator__button calculator__button--operator" data-value="/">/</button>
            <button type="button" class="calculator__button" data-value="4">4</button>
            <button type="button" class="calculator__button" data-value="5">5</button>
            <button type="button" class="calculator__button" data-value="6">6</button>
            <button type="button" class="calculator__button calculator__button--operator" data-value="*">*</button>
            <button type="button" class="calculator__button" data-value="1">1</button>
            <button type="button" class="calculator__button" data-value="2">2</button>
            <button type="button" class="calculator__button" data-value="3">3</button>
            <button type="button" class="calculator__button calculator__button--operator" data-value="-">-</button>
            <button type="button" class="calculator__button" data-value="0">0</button>
            <button type="button" class="calculator__button calculator__button--decimal" data-value=".">.</button>
            <button type="button" class="calculator__button calculator__button--clear" data-value="clear">C</button>
            <button type="button" class="calculator__button calculator__button--operator" data-value="+">+</button>
            <button type="button" class="calculator__button calculator__button--equals" data-value="=">=</button>
        </div>
    </div>
    <script src="main.js"></script>
</body>
```

* Save the HTML file and create a new CSS file with a .css extension. Add styles to CSS file following this principle:

###### Test the styles
###### Optimize performance by techniques like reducing the size of the CSS file, and using techniques like lazy loading to reduce the initial load time.
###### Improve accessibility by sing CSS techniques like using clear and readable fonts, using high-contrast colors, and providing alternative text for images.
###### Refactor codes by using a preprocessor like Sass, following a modular architecture like BEM or SMACSS


```
body {
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
  background-color: rgba(44, 24, 221, 0.644);
}

#calculator {
  width: 400px;
  height: 300px;
  background-color: rgba(44, 24, 221, 0.644);
  border-radius: 5px;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  font-family: Arial, sans-serif;
  font-size: 1.2em;
}

#display {
  background-color: #ffffff;
  color: black;
  width: 100%;
  height: 60px;
  text-align: right;
  font-size: 2em;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  outline: none;
}

#buttons-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

button {
  width: 25%;
  height: 60px;
  font-size: 1.5em;
  border: none;
  outline: none;
  background-color: #e4e4e4;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

@media only screen and (max-width: 400px) {
  #buttons-container button {
    width: 50%;
  }
}
```

* Save the CSS file and create a new JavaScript file with a .js extension.

* Planning and creating architecture of JavaScript code

###### Review the project requirements
###### Determine the appropriate programming patterns and frameworks such as React or Vue.js, or a more traditional like vanilla JavaScript and DOM manipulation
###### Plan the structure of the JavaScript code by breaking down the project requirements into smaller, manageable tasks.
###### Plan to divide the page components 
###### Organize the list of features and functionality into groups
###### Write pseudocode to outline the steps needed to achieve each task.
###### Create a flowchart or diagram that outlines the flow of the application and the relationships between different components.
###### Determine the best data structures and algorithms to use for each task
###### Use code quality tools such as linters and unit testing frameworks
###### Review and Refactor codes 

* Start coding by writing clean code, avoiding global variables


```
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
```

### Testing and Debugging the codes

Tools we normally use for testing are:

* Console
* Chrome DevTools, Visual Studio Code Debugger.
* frameworks, such as Jest or Mocha, are used to automate the testing of JavaScript code
* Linters, such as ESLint or JSLint, are used to analyze code for errors and potential problems
* Code editors such as Visual Studio Code 

### You can also!
That's it! With these steps, you should be able to create a basic calculator project. Lets keep learning how to code!


## My Questions, Doubts and Challenges!

* Should I create the elements in html or javascript?

In general, you should create the basic structure of your user interface in HTML and use JavaScript to add interactivity and dynamic behavior to the page. This approach separates the content, presentation, and behavior of your application, making it easier to maintain and modify.

* Is it necessary putting type="button" inside of button element?

Yes,This way, the button will not trigger any default behavior when clicked

* Why we are using  readonly at the end of input like this ``` <input type="text" class="calculator__display" readonly> ```

In HTML, the readonly attribute is used to make an input element readonly, meaning that the user can't modify its value, but can still see the value and select it.

* why we create all 16 button elements in html and not JS? 

There are several reasons why wer might choose to create all of the calculator's buttons in HTML rather than using JavaScript to generate them dynamically:

###### Performance: Generating HTML elements dynamically using JavaScript can be slower than creating them statically in HTML
###### Accessibility: By creating the buttons in HTML, the developer can ensure that they are accessible to users with disabilities
###### Maintenance: By creating the buttons in HTML, the developer can more easily modify their appearance and behavior using CSS and JavaScript.

* what should we do if we have 50 or more buttons instead of 16?

If you have 50 buttons instead of 16, we might still choose to create them manually in HTML, especially if the buttons are all similar in appearance and behavior. However, creating 50 buttons manually can be a tedious and error-prone process.
To streamline this process, we might use a tool like a code editor with built-in snippets or a library like Bootstrap to generate the HTML code for the buttons automatically. 

* what should we do if we have 1000 buttons instead of 16?

If you have 1000 buttons instead of 16, it would not be practical to create them manually in HTML. In this case, we use JavaScript to generate the buttons dynamically 
by using a loop method in JavaScript to create and append the buttons to the DOM

* What should we do after creating basic HTML structures?

###### Adding some styles to the CSS file with this guideline:

- Use a CSS preprocessor like Sass to create more readable and reusable styles
- Follow a naming convention: Using a BEM (Block Element Modifier) or SMACSS (Scalable and Modular Architecture for CSS)
- Use a CSS framework: Bootstrap or Materialize to speed up the development 
- Use a CSS reset:  Normalize.css or Reset.css to ensure that the styles are consistent across different browsers
- Use a CSS linter:like Stylelint to ensure that the code is free of errors








