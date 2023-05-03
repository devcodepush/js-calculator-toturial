# js-calculator

GitHub Page [link](https://devcodepush.github.io/js-calculator/)

## Instruction
Here is a step-by-step guide on how to build a calculator project based on the HTML, CSS, and JavaScript

### How to

* Start by creating a new HTML file and save it with a .html extension. Add the basic HTML structure with the necessary meta tags, title, and a link to the CSS file.

```html
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

```html
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

```html
<body>
    <div class="calculator">
        <input id="calculator-display" type="text" class="calculator__display" readonly>
        <div class="calculator__buttons">
            <button class="calculator__button" data-value="7">7</button>
            <button class="calculator__button" data-value="8">8</button>
            <button class="calculator__button" data-value="9">9</button>
            <button class="calculator__button calculator__button--operator" data-value="/">/</button>
            <button class="calculator__button" data-value="4">4</button>
            <button class="calculator__button" data-value="5">5</button>
            <button class="calculator__button" data-value="6">6</button>
            <button class="calculator__button calculator__button--operator" data-value="*">*</button>
            <button class="calculator__button" data-value="1">1</button>
            <button class="calculator__button" data-value="2">2</button>
            <button class="calculator__button" data-value="3">3</button>
            <button class="calculator__button calculator__button--operator" data-value="-">-</button>
            <button class="calculator__button" data-value="0">0</button>
            <button class="calculator__button calculator__button--decimal" data-value=".">.</button>
            <button class="calculator__button calculator__button--clear" data-value="clear">C</button>
            <button class="calculator__button calculator__button--operator" data-value="+">+</button>
            <button class="calculator__button calculator__button--equals" data-value="=">=</button>
        </div>
    </div>
    <script src="main.js"></script>
</body>
```

* Save the HTML file and create a new CSS file with a .css extension. Add styles to each of the buttons and the display element.

* Save the CSS file and create a new JavaScript file with a .js extension.

* Start by getting references to the necessary HTML elements using the getElementById() method.

* Add an event listener to the calculatorButtons element using the addEventListener() method. The listener should listen for a 'click' event and then execute a function that checks if the clicked element is a button.

* Inside the function, check if the clicked button is a number, operator, clear, or equals button using the isNumber() and isOperator() functions.

* If the clicked button is a number or operator, append the corresponding value to the display element using the += operator.

* If the clicked button is the clear button, set the value of the display element to an empty string.

* If the clicked button is the equals button, get the expression from the display element, split it into operands and operators, and then evaluate the expression using a switch statement.

* Finally, set the value of the display element to the result of the evaluated expression.

* Save the JavaScript file and link it to the HTML file using the script tag.

* Open the HTML file in a browser and test the calculator functionality.

### You can also!
That's it! With these steps, you should be able to create a basic calculator project similar to the one you provided.
