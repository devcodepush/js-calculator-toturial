# js-calculator

## Instruction
Here is a step-by-step guide on how to build a calculator project based on the HTML, CSS, and JavaScript

### How to

1. Start by creating a new HTML file and save it with a .html extension. Add the basic HTML structure with the necessary meta tags, title, and a link to the CSS file.

2. Inside the body tag, create a div with the id "calculator" and another div inside it with the id "buttons-container". Add an input element with the id "display" inside the first div.

3. Create buttons for each of the numbers, operators, clear, and equals, and add the appropriate values and ids to each button.

4. Save the HTML file and create a new CSS file with a .css extension. Add styles to each of the buttons and the display element.

5. Save the CSS file and create a new JavaScript file with a .js extension.

6. Start by getting references to the necessary HTML elements using the getElementById() method.

7. Add an event listener to the calculatorButtons element using the addEventListener() method. The listener should listen for a 'click' event and then execute a function that checks if the clicked element is a button.

8. Inside the function, check if the clicked button is a number, operator, clear, or equals button using the isNumber() and isOperator() functions.

9. If the clicked button is a number or operator, append the corresponding value to the display element using the += operator.

10. If the clicked button is the clear button, set the value of the display element to an empty string.

11. If the clicked button is the equals button, get the expression from the display element, split it into operands and operators, and then evaluate the expression using a switch statement.

12. Finally, set the value of the display element to the result of the evaluated expression.

13. Save the JavaScript file and link it to the HTML file using the script tag.

14. Open the HTML file in a browser and test the calculator functionality.

### You can also!
That's it! With these steps, you should be able to create a basic calculator project similar to the one you provided.
